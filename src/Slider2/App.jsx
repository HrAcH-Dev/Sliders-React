import { useState, useRef } from 'react';
import './App.scss';

function App() {
  const [data, setData] = useState([
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Nissan Sentra",
        description: "SE-R Spec V"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1613751382362-6492c991bc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        title: "Honda Civic",
        description: "2019 Sport"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1631831905906-d9c44601ec7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Ford Fiesta",
        description: "TITANIUM 2018"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Mazda 3",
        description: "Sedan"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1515985748416-3723c86f4a83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80",
        title: "Mazda 3",
        description: "2014 BKSV"
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Nissan Sentra",
        description: "SE-R Spec V"
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Nissan Sentra",
        description: "SE-R Spec V"
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1613751382362-6492c991bc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        title: "Honda Civic",
        description: "2019 Sport"
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1631831905906-d9c44601ec7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Ford Fiesta",
        description: "TITANIUM 2018"
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Mazda 3",
        description: "Sedan"
    },
    {
        id: 11,
        img: "https://images.unsplash.com/photo-1515985748416-3723c86f4a83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80",
        title: "Mazda 3",
        description: "2014 BKSV"
    },
    {
        id: 12,
        img: "https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Nissan Sentra",
        description: "SE-R Spec V"
    }
  ]);
  const carousel = useRef(null);

  

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 300;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 300;
  };


  return (
    <div className="container">
        <div className="container-text">
          <h2>Models you were interesed most MTD:</h2>
          <div className="buttons">
            <button onClick={handleLeftClick}>
              <p>&#60;</p>
            </button>
            <button onClick={handleRightClick}>
              <p>&#62;</p>
            </button>
          </div>
        </div>
      
      <div className="container-carousel" ref={carousel}>
        {data.map((elem) => {
          return (
            <div className="container-carousel-item" key={elem.id}>
              <div className="image">
                <img src={elem.img} alt="" />
              </div>
              <div className="info">
                <span className="name1">{elem.title}</span>
                <span className="name2">{elem.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
