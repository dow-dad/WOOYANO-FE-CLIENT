import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Stack, Tab, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker, DateTimePicker, MobileDatePicker, MobileTimePicker, StaticDatePicker, StaticTimePicker, DesktopDatePicker, DesktopTimePicker, MobileDateTimePicker, DesktopDateTimePicker } from "@mui/x-date-pickers"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiPickersPageView = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_, newValue) => setValue(newValue);

  const [selectDate, setSelectedDate] = useState(new Date(2023-1-5));
  const [selectTime, setSelectTime] = useState(new Date(2023-1-5));
  return <ComponentPageLayout title="Date/Time Pickers" fullLink="https://mui.com/x/react-date-pickers">
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab value="1" label="Date Picker" />
          <Tab value="2" label="Time Picker" />
          <Tab value="3" label="Date Time Picker" />
        </TabList>

        <TabPanel value="1">
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <Block title="Basic">
                <Stack spacing={4}>
                  <DesktopDatePicker label="For Desktop" value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />

                  <MobileDatePicker label="For Mobile" value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />

                  <DatePicker // disableFuture
                openTo="year" label="Responsive" views={["year", "month", "day"]} value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />
                </Stack>
              </Block>

              <Block title="Static Date" sx={{
              mt: 3
            }}>
                <Stack spacing={4}>
                  <DatePicker views={["year"]} label="Year only" value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />
                  <DatePicker views={["year", "month"]} label="Year and Month" minDate={new Date("2012-03-01").toDateString()} maxDate={new Date("2023-06-01").toDateString()} value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />
                  <DatePicker openTo="year" views={["year", "month", "day"]} label="Year, month and date" value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />
                  <DatePicker views={["day", "month", "year"]} label="Invert the order of views" value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />
                  <DatePicker views={["day"]} label="Just date" value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />
                </Stack>
              </Block>
            </Grid>

            <Grid item lg={6} xs={12}>
              <Block title="Static Date">
                <Stack spacing={4}>
                  <StaticDatePicker openTo="day" orientation="landscape" value={selectDate} onChange={newValue => setSelectedDate(newValue)} renderInput={params => <TextField {...params} fullWidth size="medium" />} />
                </Stack>
              </Block>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="2">
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <Block title="Basic">
                <Stack spacing={4}>
                  <TimePicker label="With AM/PM (12 hours)" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" />} />

                  <TimePicker ampm={false} label="Without AM/PM (24 hours)" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" />} />
                </Stack>
              </Block>

              <Block title="Static" sx={{
              mt: 3
            }}>
                <StaticTimePicker ampm orientation="landscape" openTo="hours" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" />} />
              </Block>
            </Grid>

            <Grid item lg={6} xs={12}>
              <Block title="Responsiveness">
                <Stack spacing={4}>
                  <MobileTimePicker label="For mobile" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" />} />

                  <DesktopTimePicker label="For desktop" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" />} />

                  <TimePicker value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" />} />
                </Stack>
              </Block>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="3">
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <Block title="Basic">
                <DateTimePicker label="DateTimePicker" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" fullWidth />} />
              </Block>
            </Grid>

            <Grid item lg={6} xs={12}>
              <Block title="Responsiveness">
                <Stack spacing={3}>
                  <MobileDateTimePicker label="For mobile" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" fullWidth />} />

                  <DesktopDateTimePicker label="For desktop" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" fullWidth />} />

                  <DateTimePicker label="Responsive" value={selectTime} onChange={newValue => setSelectTime(newValue)} renderInput={params => <TextField {...params} size="medium" fullWidth />} />
                </Stack>
              </Block>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </ComponentPageLayout>;
};

export default MuiPickersPageView;