import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const hoturl="https://images.unsplash.com/photo-1751889188945-f15e42becd73?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const coldurl="https://media.istockphoto.com/id/1094915042/photo/cold-day-on-the-snow.webp?a=1&b=1&s=612x612&w=0&k=20&c=DnyqMnQeOv6LGZRESvfntI1YchFQ3lPVAgdhBO62Uls=";
    const rainyurl="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return(
        <div>
            <h4 style={{color:"black"}}>Weather Info</h4>
    <Card sx={{ mx: "auto",maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainyurl:(info.temp>25)?hoturl:coldurl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <p>Min temp={info.tempMin}&deg;C</p>
         <p>Min temp={info.tempMax}&deg;C</p>
         <p>The weather is described as "{info.weather}" feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}