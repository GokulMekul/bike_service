import './Home.css';
function Card(){
    return <div>
    <div id="card-Background">
    <div class="card">
      <img src={Ww} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Water Wash</h5>
        <p class="card-text"> "We're adding extra shine to your wheels that will make your bike unique on the road"</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card">
      <img src={Bs} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">General Checkup</h5>
        <p class="card-text">"We provide a general check for your bike that increases safety for your bike's life."</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card">
      <img src={Ow} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Oil Wash</h5>
        <p class="card-text">"We make the best oil wash for your bike increases the power and lifespan of bike."</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    </div>
}
export default Card;