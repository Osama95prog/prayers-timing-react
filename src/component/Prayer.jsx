import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Prayer({ name, time, image }) {
	return (
		<Card sx={{ width: "13vw",padding: '11px' }}>
			<CardMedia
				sx={{ height: 100 }}
				image={image}
				title="green iguana"
			/>
				<Divider
					style={{ borderColor: "#000", opacity: "0.8", marginTop: "8px" }}
				/>
			<CardContent>
				<h2 style={{ marginBottom: '7px' }}>{name}</h2>
				<Divider
					style={{ borderColor: "#000", opacity: "0.8", marginBottom: "30px" }}
				/>

				
				<Typography variant="h3" color="text.secondary">
					{time}
				</Typography>
			</CardContent>
				{/* <Divider
					style={{ borderColor: "#000", opacity: "0.8", marginBottom: "3px" }}
				/> */}
		</Card>
		
	);
}
