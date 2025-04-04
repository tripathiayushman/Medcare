import Header from '../components/Header';
import Footer from '../components/Footer';

const Book = () => {
  return (
    <>
      <Header />
      <section className="book" id="book">
        <h1 className="heading"> <span>book</span> now </h1>
        <div className="row">
          <div className="image">
            <img src="/image/book-img.png" alt="" />
          </div>
          <form>
            <h3>book appointments</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="book now" className="btn" />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Book;