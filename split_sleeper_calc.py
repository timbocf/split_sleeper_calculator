# A calculator to calculate available hours after a split sleeper berth break

# In the US, drivers have 11 hours of driving and 14 hours of on-duty time each day
# A driver can take a split sleeper berth break for a total of 10 hours, split up as 2-3 hours and 7-8 hours for each break (2:8, 7:3)
MAX_DRIVE_HOURS = 11
MAX_ONDUTY_HOURS = 14  

def calculate_eld_hours():
    avail_drive_hours = 0
    avail_onduty_hours = 0

    onduty_hours_before_first_break = int(input(f"How many hours you were on-duty (driving or non-driving) before your first break? \n"))

    print("In the US, drivers can take a split sleeper berth break in increments of 2 and 8 (for a total of 10) or 3 and 7 (also for a total of ten). \n")

    length_of_first_break = int(input(f"How long was your first break? \n"))

    onduty_hours_after_first_break = int(input(f"How many hours were you on-duty (driving or non-driving) AFTER your first break? \n"))

    length_of_second_break = int(input(f"How long was your second break? \n"))

    # After the second break, the driver's clock subtracts the total time between breaks from the max for the day (14 on-duty hours total):
    # ie the driver was on-duty for 5 hours, took a break of 8 hours, worked for 3 hours, took a break of 2 hours,
    # he/she will have 14 - 3 or 11 hours available after the second break.        
    if (length_of_first_break == 2 and length_of_second_break == 8) or (length_of_first_break == 3 and length_of_second_break == 7) or(length_of_first_break == 7 and length_of_second_break == 3) or (length_of_first_break == 8 and length_of_second_break == 2):
        avail_onduty_hours = MAX_ONDUTY_HOURS - onduty_hours_after_first_break
    else:
        print("Your first break must be either 2 or 3, or 7 or 8")

    return f"You have {avail_onduty_hours} hours available to work after your 2nd break."

print(calculate_eld_hours())