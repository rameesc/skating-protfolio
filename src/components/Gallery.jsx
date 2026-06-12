import g1 from '../../public/galley/g1.png';
import g2 from '../../public/galley/g2.jpg';
import g3 from '../../public/galley/g3.jpg';
import g4 from '../../public/galley/g4.jpg';
import g5 from '../../public/galley/g5.jpg';
import g6 from '../../public/galley/g6.jpeg';

const gallery = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
];

function Gallery() {
  return (
    <section id='gallery' className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((img) => (
            <img
              key={img}
              src={img}
              alt=""
              className="rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;