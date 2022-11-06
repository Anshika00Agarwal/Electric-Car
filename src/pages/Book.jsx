export default function About(){
  return (
    <div class="a">
        <br/><br/><br/>
    <section class="book" id="book">

<h1 class="heading">
    <span>B</span>
    <span>o</span>
    <span>o</span>
    <span>k</span>
    <span class="space"></span>
    <span>N</span>
    <span>o</span>
    <span>w</span>
</h1>

<div class="row">

    <div class="image">
        <img src="https://i.pinimg.com/736x/49/c5/95/49c5958353509359fc8973365994cfa8.jpg" alt=""/>
    </div>

    <form action="">
        <div class="inputBox">
            <h3>Which car</h3>
            <input type="text" placeholder="Car name"/>
        </div>
        <div class="inputBox">
            <h3>Model Name</h3>
            <input type="number" placeholder="Model Name"/>
        </div>
        <div class="inputBox">
            <h3>date of delivery</h3>
            <input type="date"/>
        </div>
        <div class="inputBox">
            <h3>token amount</h3>
            <input type="number" placeholder="$"/>
        </div>
        <input type="submit" class="btn" value="book now"/>
    </form>

</div>

</section>
</div>
    );
  }
  