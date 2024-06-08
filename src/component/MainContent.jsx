import { useEffect, useState } from "react";
import Prayer from "./Prayer";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import moment from "moment";

export default function MainContent() {
	//all my  state
  const [timings, setTimings] = useState({
    Fajr: "04:20",
    Dhuhr: "11:50",
    Asr: "15:18",
    Sunset: "18:03",
    Isha: "19:33",
  });
  const [selectedCity, setSelectedCity] = useState({
    apiName: "Damascus",
    displayName: "دمشق",
  });

  const [today, setToday] = useState("")

//   End state 

  const avilableCities = [
    {
      apiName: "Damascus",
      displayName: "دمشق",
    },
    {
      apiName: "Aleepo",
      displayName: "حلب",
    },
    {
      apiName: "Homs",
      displayName: "حمص",
    },
    {
      apiName: "Lataqia",
      displayName: "اللاذقية",
    },
    {
      apiName: "Hama",
      displayName: "حماة",
    },
  ];

  const handleCityChange = (event) => {
    console.log(event);
    const cityObject = avilableCities.find((city) => {
      return city.apiName == event.target.value;
    });
    console.log("the new value is ", event.target.value);
    setSelectedCity(cityObject);
  };

  const timingsApi = async () => {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=${selectedCity.apiName}&country=Syria`
    );
    console.log({ response });
    setTimings(response.data.data.timings);
  };

  useEffect(() => {
	console.log('calling the api');
    timingsApi();
  },[selectedCity]);

  useEffect(() => {
	const t = moment();
	setToday(t.format("MMMM Do YYYY | hh:mm:ss a"))
  })

  return (
    <div style={{ color: "#999" }}>
      <Grid
        container
        style={{
          background: "#fff",
          paddingRight: "30px",
          borderRadius: "10px",
        }}
      >
        <Grid md={6}>
          <div>
            <h2>سبتمبر 9 2023 | 4:20</h2>
            <h2>{today}</h2>
            <h1>
				{selectedCity.displayName}
			</h1>
          </div>
        </Grid>
        <Grid md={6}>
          <div>
            <h2>الوقت المتبقي لصلاة العصر</h2>
            <h1> 7 : 25 : 30</h1>
          </div>
        </Grid>
      </Grid>
      {/* TOP ROW  */}

      <Divider
        style={{ borderColor: "#fff", opacity: "0.5", marginTop: "20px" }}
      />

      {/* PRAYERS CARDS */}
      <Stack
        direction="row"
        justifyContent={"space-around"}
        style={{ marginTop: "30px" }}
      >
        <Prayer
          name="الفجر"
          time={timings.Fajr}
          image="https://wepik.com/api/image/ai/9a07baa7-b49b-4f6b-99fb-2d2b908800c2"
        />
        <Prayer
          name="الظهر"
          time={timings.Dhuhr}
          image="https://wepik.com/api/image/ai/9a07bb45-6a42-4145-b6aa-2470408a2921"
        />
        <Prayer
          name="العصر"
          time={timings.Asr}
          image="https://wepik.com/api/image/ai/9a07bb90-1edc-410f-a29a-d260a7751acf"
        />
        <Prayer
          name="المغرب"
          time={timings.Sunset}
          image="https://wepik.com/api/image/ai/9a07bbe3-4dd1-43b4-942e-1b2597d4e1b5"
        />
        <Prayer
          name="العشاء"
          time={timings.Isha}
          image="https://wepik.com/api/image/ai/9a07bc25-1200-4873-8743-1c370e9eff4d"
        />
      </Stack>
      {/*== PRAYERS CARDS ==*/}

      {/* SELECT CITY */}
      <Stack
        direction="row"
        justifyContent={"center"}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <FormControl style={{ width: "20%" }}>
          <InputLabel id="demo-simple-select-label">
            <span style={{ color: "#fff" }}>المدينة</span>
          </InputLabel>
          <Select
            style={{ color: "#fff" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="City"
            onChange={handleCityChange}
          >
            {avilableCities.map((city) => {
              return (
                <MenuItem value={city.apiName} key={city.apiName}>
                  {city.displayName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
