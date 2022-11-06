import videos from './videos.mp4';
export default function Home() {
  return (<div class="a">
	<br/><br/><br/><br/><br/>
   <section class="home" id="home">

<div class="content">
	<h3>NEW ERA OF ELECTRIC GENERATION</h3>
	<p></p>
	<a href="#" class="btn">Discover More</a>
</div>

<div class="controls">
	<span  data-src="https://media.istockphoto.com/videos/moving-inside-the-car-with-bright-sunlight-flare-video-id1321738337"></span>
		</div>

<div class="video-container">
	{/* <video src="https://media.istockphoto.com/videos/auto-quickly-rides-on-the-road-66-america-freedom-journey-concept-by-video-id959381792" id="video-slider" loop autoplay muted></video> */}
	<video className='videoTag' autoPlay loop muted>
    <source src={videos} type='video/mp4' />
</video>
</div>

</section>
		</div>
		


  );
}