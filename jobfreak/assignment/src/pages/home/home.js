import React from "react";
import "../home/home.css";
import cetaphil from "../../assets/images/cetaphil.webp";
import faceshop from "../../assets/images/Face shop.webp";
import korean from "../../assets/images/Korean serum.png";
import loreal from "../../assets/images/Loreal HA Serum.webp";
import neutrogena from "../../assets/images/Neutrogena.png";
import truclear from "../../assets/images/Truclear.jpeg";
import truskin from "../../assets/images/TruSkin.webp";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="home-section">
          <h1>Welcome to Lavishing Beauty</h1>
          <p>
            Our mission is to help you embrace your natural beauty and enhance
            your confidence. We offer a wide range of high-quality beauty
            products and expert tips to help you look and feel your best.
            Discover our luxurious skincare collection, carefully curated to
            cater to all skin types and concerns. From hydrating moisturizers to
            nourishing serums, our products are designed to enhance your skin's
            radiance and promote a healthy complexion. Indulge in our exquisite
            makeup selection, featuring a variety of shades and textures to suit
            every skin tone and style. Whether you're going for a natural
            everyday look or a glamorous evening makeup, we have the perfect
            products to create your desired look. Pamper yourself with our
            luxurious bath and body products, crafted with the finest
            ingredients to provide a soothing and rejuvenating experience. From
            fragrant bath bombs to nourishing body lotions, our products will
            leave your skin feeling soft, smooth, and refreshed. Explore our
            trendy haircare range, offering innovative solutions for all hair
            types. From volumizing shampoos to revitalizing hair masks, we have
            everything you need to achieve luscious locks and maintain healthy
            hair. At Glamour Beauty, we believe in empowering individuals to
            embrace their unique beauty. Our blog features informative articles,
            beauty tutorials, and expert advice to inspire and educate our
            community. Stay up-to-date with the latest beauty trends and gain
            valuable insights from our team of experienced professionals. Shop
            with confidence, as we prioritize customer satisfaction and offer a
            seamless shopping experience. Enjoy secure payment options, fast
            shipping, and exceptional customer support. Join us on this beauty
            journey and unlock your true potential. Embrace the beauty within
            and let Glamour Beauty be your trusted companion in enhancing your
            natural radiance.
          </p>

          <h2>Featured Products</h2>
          <div className="card-container">
            <div className="card">
              <img src={cetaphil} className="card-img-top" alt="cetaphil" />
              <div className="card-body">
                <h5 className="card-title">Cetaphil</h5>

                <a href="/product" className="card-link">
                  Read More...
                </a>
              </div>
            </div>
            <div className="card">
              <img src={faceshop} className="card-img-top" alt="Faceshop" />
              <div className="card-body">
                <h5 className="card-title">Face Shop</h5>

                <a href="/product" className="card-link">
                  Read More...
                </a>
              </div>
            </div>
            <div className="card">
              <img src={korean} className="card-img-top" alt="korean" />
              <div className="card-body">
                <h5 className="card-title">Korean Skin Care</h5>

                <a href="/product" className="card-link">
                  Read More...
                </a>
              </div>
            </div>
            <div className="card">
              <img src={neutrogena} className="card-img-top" alt="truclear" />
              <div className="card-body">
                <h5 className="card-title">TruClear</h5>

                <a href="/product" className="card-link">
                  Read More...
                </a>
              </div>
            </div>
            <div className="card">
              <img src={truskin} className="card-img-top" alt="truskin" />
              <div className="card-body">
                <h5 className="card-title">TruSkin</h5>

                <a href="/product" className="card-link">
                  Read More...
                </a>
              </div>
            </div>
            <div className="card">
              <img src={neutrogena} className="card-img-top" alt="neutrogena" />
              <div className="card-body">
                <h5 className="card-title">Neutrogena</h5>

                <a href="/product" className="card-link">
                  Read More...
                </a>
              </div>
            </div>
            <div className="card">
              <img src={loreal} className="card-img-top" alt="loreal" />
              <div className="card-body">
                <h5 className="card-title">Loreal</h5>

                <a href="/product" className="card-link">
                  Read More...
                </a>
              </div>
            </div>
          </div>
        </section>
        <div>
          <footer>
            <div className="center">
              Copyright &copy; www.lavishing.com. All rights reserved
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
