const input=document.querySelector("input");
const btn=document.querySelector("button");
const city_name=document.querySelector(".result #city");
const temp=document.querySelector(".result #temp");
const humidity=document.querySelector(".hum h2");
const wind=document.querySelector(".wind h2");
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0309971e3dmsh16708ba8769f56dp1683c7jsn34a955691d10',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
btn.addEventListener("click",async()=>
{
    let city=input.value;
    console.log(city);
    const new_url=`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    try {
        const response = await fetch(new_url, options);
        const result = await response.json();
        city_name.innerText=city;
        temp.innerText= result["temp"]+"°c";
        console.log(result.temp);
        humidity.innerText=result["humidity"]+"%";
        wind.innerText=result["wind_speed"]+" km/h";
        
        if(result["humidity"]>60)
        {
           let new_src="./images/clouds.png";
           document.querySelector(".sky img").src=new_src;
        }
        else if(result["temp"]<=0 )
        {
            let new_src="./images/snow.png";
            document.querySelector(".sky img").src=new_src;
        }
        else if(result["temp"]<=0 && result["humidity"]>60)
        {
            let new_src="./images/snow.png";
            document.querySelector(".sky img").src=new_src;
        }
        else
        {
            let new_src="./images/clear.png";
            document.querySelector(".sky img").src=new_src;
        }



    } catch (error) {
        console.error(error);
    } 
})


