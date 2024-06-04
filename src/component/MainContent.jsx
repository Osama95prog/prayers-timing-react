import { useEffect } from "react";
import Prayer from "./Prayer";
import Stack from "@mui/material/Stack";
import { Divider, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



export default function MainContent() {

  
  return (
    <div style={{ color: '#fff' }}>
        <Grid container style={{ background : "#bbb", paddingRight: "12px",borderRadius: "10px" }} >
            <Grid xs={6}>
                <div>
                    <h2>سبتمبر 9 2023 | 4:20</h2>
                    <h1>مكة المكرمة</h1>
                </div>
            </Grid>
            <Grid xs={6}>
               <div>
                <h2>الوقت المتبقي لصلاة العصر</h2>
                <h1> 7 : 25 : 30</h1>
               </div>
            </Grid>
        </Grid>
       {/* TOP ROW  */}

			<Divider style={{ borderColor: "#777", opacity: "0.5", marginTop: "10px"  }} />

    {/* PRAYERS CARDS */}
			<Stack
				direction="row"
				justifyContent={"space-around"}
				style={{ marginTop: "50px" }}
			>
				<Prayer
					name="الفجر"
					// time={timings.Fajr}
					image="https://wepik.com/api/image/ai/9a07baa7-b49b-4f6b-99fb-2d2b908800c2"
				/>
				<Prayer
					name="الظهر"
					// time={timings.Dhuhr}
					image="https://wepik.com/api/image/ai/9a07bb45-6a42-4145-b6aa-2470408a2921"
				/>
				<Prayer
					name="العصر"
					// time={timings.Asr}
					image="https://wepik.com/api/image/ai/9a07bb90-1edc-410f-a29a-d260a7751acf"
				/>
				<Prayer
					name="المغرب"
					// time={timings.Sunset}
					image="https://wepik.com/api/image/ai/9a07bbe3-4dd1-43b4-942e-1b2597d4e1b5"
				/>
				<Prayer
					name="العشاء"
					// time={timings.Isha}
					image="https://wepik.com/api/image/ai/9a07bc25-1200-4873-8743-1c370e9eff4d"
				/>
			</Stack>
			{/*== PRAYERS CARDS ==*/}

      {/* SELECT CITY */}
			<Stack
				direction="row"
				justifyContent={"center"}
				style={{ marginTop: "40px" }}
			>
				<FormControl style={{ width: "20%" }}>
					<InputLabel id="demo-simple-select-label">
						<span style={{ color: "#333" }}>المدينة</span>
					</InputLabel>
					<Select
						style={{ color: "#333" }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						label="Age"
						// onChange={handleCityChange}
					>
						{/* {avilableCities.map((city) => {
							return (
								<MenuItem
									value={city.apiName}
									key={city.apiName}
								>
									{city.displayName}
								</MenuItem>
							);
						})} */}
					</Select>
				</FormControl>
			</Stack>
 
    </div>
  )
}
