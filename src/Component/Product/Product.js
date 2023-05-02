import React from 'react'
import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from './image/fa_62673a.png'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


  const options = ['₹500', '₹1500', '₹2500', '₹3500', '₹5000'];
  const onOptionChangeHandler = (event) => {
      console.log("User Selected Value - ", event.target.value)
  }

  
function valuetext(value) {
  return `${value}°C`;
}

// const [value, setValue] = useState([20, 37]);

// const handleChange = (event, newValue) => {
//   setValue(newValue);
// }

const Product = () => {

  const card = [
    {
      id:1,
      image:'https://rukminim1.flixcart.com/image/612/612/kxaq7ww0/headphone/b/s/x/gaming-headphones-with-adjustable-mic-deep-bass-matlek-original-imag9s5kputhy6uj.jpeg?q=70',
      head:"Matlek Gaming Headphones With Adjustable Mic | Deep Bas...",
      sub:"Blue, On the Ear",
      rating:"4.1",
      rate:"(2,739)",
      price:"649",
      offer:"1,490" ,
  },
  {
    id:2,
    image:'https://rukminim1.flixcart.com/image/612/612/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70',
    head:"OnePlus Bullets Wireless Z2 with Fast Charge, 30 Hrs Ba...",
    sub:"Magico Black, In the Ear",
    rating:"4.2",
    rate:"(4,86,920)",
    price:"1,999",
    offer:"2,999" ,
  },
  {
    id:3,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/y/5/r/-original-imaghyfu4kuasksc.jpeg?q=70',
    head:"Boult Audio Truebuds with 30H Battery, IPX7 Waterproof,...",
    sub:"Grey, True Wireless",
    rating:"3.8",
    rate:"(45,630)",
    price:"1,099",
    offer:"7,999" ,
  },
  {
    id:4,
    image:'https://rukminim1.flixcart.com/image/612/612/l47cu4w0/shopsy-headphone/5/p/j/yes-b11-wireless-neckband-bluetooth-marvel-gadgets-original-imagf5mahnvmaugk.jpeg?q=70',
    head:"Azkiya B11 Wireless Neckband Bluetooth Bluetooth Headse...",
    sub:"Multicolor, True Wireless",
    rating:"3.4",
    rate:"(10)",
    price:"203",
    offer:"599" ,
  },
  {
    id:5,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70',
    head:"OnePlus Bullets Wireless Z2 with Fast Charge, 30 Hrs Ba...",
    sub:"Magico Black, In the Ear",
    rating:"4.2",
    rate:"(73,023)",
    price:"1,799",
    offer:"3,999" ,
  },
  {
    id:6,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/g/h/i/nb140-evolve-24-hours-playtime-deep-bass-made-in-india-original-imagmhqmr3hts9k6.jpeg?q=70',
    head:"Aroma NB140 Evolve 24 Hours* Playtime | Deep Bass | Mad...",
    sub:"Black, True Wireless",
    rating:"3.7",
    rate:"(7,396)",
    price:"999",
    offer:"1,999" ,
  },
  {
    id:7,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/9/g/i/-original-imagg5jf6hbjuwsj.jpeg?q=70',
    head:"Boult Audio X1 Wired Headset",
    sub:"Blue Black, In the Ear",
    rating:"4.1",
    rate:"(2,69,750)",
    price:"349",
    offer:"999" ,
  },
  {
    id:8,
    image:'https://rukminim1.flixcart.com/image/612/612/kj0bp8w0-0/headphone/y/2/y/bassheads-103-blue-boat-original-imafyz3whrtk84zp.jpeg?q=70',
    head:"boAt Bassheads 103 Blue Wired Headset",
    sub:"Blue, In the Ear",
    rating:"4.2",
    rate:"(5,91,273)",
    price:"499",
    offer:"1,290" ,
  },
  {
    id:9,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/0/u/v/nb119-titanium-48-hours-bluetooth-neckband-aroma-original-imaghrchvb9hjzjp.jpeg?q=70',
    head:"Aroma NB119 Titanium - 48 Hours Playtime Bluetooth Neck...",
    sub:"Blue, In the Ear",
    rating:"4",
    rate:"(1,58,907)",
    price:"480",
    offer:"2,499" ,
  },
  {
    id:10,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/u/b/n/nb140-dhamaal-24-hours-playtime-deep-bass-made-in-india-original-imagzdqrnbresqh6.jpeg?q=70',
    head:"Aroma NB140 Dhamaal 24 Hours* Playtime | Deep Bass | Ma...",
    sub:"Baby Pink, True Wireless",
    rating:"3.5",
    rate:"(434)",
    price:"559",
    offer:"1,999" ,
  },
  {
    id:11,
    image:'https://rukminim1.flixcart.com/image/612/612/l572ufk0/headphone/l/s/o/-original-imagfxg3e4fegjh8.jpeg?q=70',
    head:"boAt Airdopes 131 PRO with 11mm Drivers,45Hrs Playback,...",
    sub:"Active Black, Dark Grey, In the Ear",
    rating:"3.9",
    rate:"(1,06,325)",
    price:"1,199",
    offer:"2,990" ,
  },
  {
    id:12,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/h/j/9/-original-imagg5jyaqyqy6ke.jpeg?q=70',
    head:"Boult Audio Bassbuds X1 Wired Headset",
    sub:"Red, In the Ear",
    rating:"4.1",
    rate:"(2,69,750)",
    price:"349",
    offer:"999" ,
  },
  {
    id:13,
    image:'https://rukminim1.flixcart.com/image/612/612/krf91u80/headphone/u/v/z/h-111-logitech-original-imag582qufdmzhp9.jpeg?q=70',
    head:"Logitech H-111 Wired Headset",
    sub:"Black, On the Ear",
    rating:"4.1",
    rate:"(1,245)",
    price:"745",
    offer:"825" ,
  },
  {
    id:14,
    image:'https://rukminim1.flixcart.com/image/612/612/l3vxbbk0/headphone/w/q/e/-original-imagewuzhfbtygzw.jpeg?q=70',
    head:"boAt Rockerz 510 Super Extra Bass Bluetooth Headset",
    sub:"Furious blue, On the Ear",
    rating:"4.3",
    rate:"(2,14,714)",
    price:"1,099",
    offer:"3,490" ,
  },
  {
    id:15,
    image:'https://rukminim1.flixcart.com/image/612/612/l31x2fk0/headphone/m/5/v/-original-image9ehhvpt8vzt.jpeg?q=70',
    head:"boAt Rockerz 255 Pro+ / 258 Pro+ with ASAP Charge and u...",
    sub:"Teal Green, In the Ear",
    rating:"4.2",
    rate:"(6,08,826)",
    price:"1,299",
    offer:"3,990" ,
  },
  {
    id:16,
    image:'https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/u/u/a/-original-imagzytfz2zqnwfx.jpeg?q=70',
    head:"Mivi Commando X9 Earbuds, Dual RGB Lights, 35ms Low Lat...",
    sub:"Black, True Wireless",
    rating:"4.2",
    rate:"(1,236)",
    price:"1,499",
    offer:"2,999" ,
  }

]


  return (
    <div className='container'>
        <div className='row'>
          <div className='col-2'>
          <div className='product-range'>
             
             <div className='product-fil'>
               <h1>Fliter</h1>
               <h3 className='clr-btn'>CLEAR ALL</h3>
               
             </div>
             {/* <div className='akg'>
                 <button><Icon className='akg-icon' icon="uim:multiply" />AKG</button>
             </div> */}
                  <div className='product-bot'>
                  </div>
             <div className='cate'>
               <h3>CATEGORIES</h3>
               <h4>Audio & Video</h4>
               <p>Headset</p>
             </div>
             <div className='product-bot'>
             </div>  
             <Box sx={{ width: 350 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        // value={value}
        // onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
             <div className='select'>
             
                 <div>
                 <select onChange={onOptionChangeHandler}>
 
                  <option>Min</option>
                  {options.map((option, index) => {
                      return <option key={index} >
                          {option}
                      </option>
                  })}
                  </select>
                 </div>
                 <div className='to'>
                   <p>to</p>
                 </div>
               
               <div>
                   <select name="cars" id="cars">
                   <option value="volvo">₹500</option>
                   <option value="saab">₹1000</option>
                   <option value="opel">₹1500</option>
                   <option value="audi">₹2000</option>
                 </select>
               </div>
               <div className='product-bot'>
             </div>
             
      
             </div>
             <div className='checked'>
              <h2>BRAND</h2>
             <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> I have a bike</label><br></br>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> I have a bike</label><br></br>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> I have a bike</label>
             </div>
           </div>
          </div>



          <div className='col-10'>
            <div className='product'>
             
             {/* <h3><span>Home <Icon icon="material-symbols:arrow-forward-ios-rounded" width="15" height="16" /></span>Audio & video</h3> */}
             {/* <p className='para'>DIZO Audio & Video ,Samsung Audio & Video ,FD1 Audio & Video ,Bose Audio & Video ,Infinity Audio & Video ,HOPPUP Audio & Video ,Sennheiser Audio & Video ,Mi Audio & Video ,Syska Audio & Video ,Marshall Audio & Video</p> */}
            
             <h2 className='product-head'>Monitor Headphones<span>(Showing 1 - 19 products of 19 products)</span></h2>
              <div className='list'>
              <ul>
              <li>Sort By</li>
              <li>Popularity</li>
              <li>price Low-to-high</li>
              <li>price high-to-low</li>
              
             </ul>
             <div className='product-bott'>
             </div>
              </div>
             
             
            <div className='row1'>
               {card.map((value,index) => {
                 return( <div className='col-4' key={index}>
                  <Card sx={{ maxWidth: 370 }}>
                   <CardActionArea>
                   <div className='card-add'>
                     <button>AD</button>
                     <button className='heart'><Icon icon="mdi:favourite-border" width="20" height="20" /></button>
                   </div>
                  <div className='card-img'>
                  <img src={value.image}/>
                  </div>
                   

                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div" className='title'>
                      <h5>{value.head}</h5>
                       <p>{value.sub}</p>
                     </Typography>
                     <Typography variant="body2" color="text.secondary" className='star'>
                       <p className='rate'>{value.rating}<Icon className='rate-icon' icon="material-symbols:star-rounded" width="20" height="20" /></p>
                       <p>{value.rate}</p>
                       <img src={img} width="120px" height="auto" alt=''/>
                     </Typography>
                     <Typography variant="body2" color="text.secondary" className='amount'>
                       <h3><Icon icon="material-symbols:currency-rupee-rounded" width="15" height="15" />{value.price}</h3>
                       <p className='amount1'><Icon icon="material-symbols:currency-rupee-rounded" width="15" height="15" /><del>{value.offer}</del></p>
                      <h4>59% of</h4>
                     </Typography>
                     <Typography variant="body2" color="text.secondary" className='free'>
                       <h3>Free Delivery</h3>
                     </Typography>
                     
                   </CardContent>
                 </CardActionArea>
                 </Card>
                 </div>
                 );
               })
             }
     
             
              
          

             </div>
            
           
            
           
           </div>
           </div>
          

        </div>
        
    </div>
  )
}

export default Product