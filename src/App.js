import layerBaseImage from './img/layer-base.png';
import layerMidImage from './img/layer-middle.png';
import layerFrontImage from './img/layer-front.png';
import dungeonImage from './img/dungeon.jpg';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
              <div className="layers">
                <div className="layer-head">
                  <div className="caption">Welcome to Parallax Web</div>
                  <div className="title">Dark forest</div>
                </div>
                <div className="img-layer layer-base" style={{ backgroundImage : `url(${layerBaseImage})`}}></div>
                <div className="img-layer layer-mid" style={{ backgroundImage : `url(${layerMidImage})`}}></div>
                <div className="img-layer layer-front" style={{ backgroundImage : `url(${layerFrontImage})`}}></div>

              </div>
          </header>
          <article className="article-main" style={{backgroundImage: `url(${dungeonImage})`}}>
            <div className="m-article-content">
              <h2 className='m-header'>Story to be continued</h2>
              <p className='m-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tenetur culpa atque fugiat? Neque obcaecati sunt, porro suscipit quos nesciunt a dignissimos consectetur consequatur? Ducimus accusamus veniam voluptates libero dolore?</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
