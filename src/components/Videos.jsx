const shorts = [
 
  "h_mLYiH7gIc",
  "bUwkPllaFfQ",
  "0c4qFjtqQYI",
  "0Q1BgXbRNCY",
  "hnYuPxvqu3I",
  "8YKqv1VZEAQ"
];

export default function Videos() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Skating Videos
      </h2>

    <div className="grid md:grid-cols-3 gap-6 p-5">
     {shorts?.map((video) => (
      <div
      key={video}
      className="aspect-[9/16] overflow-hidden rounded-xl"
      >
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${video}`}
        allowFullScreen
      />
    </div>
  ))}
</div>
    </section>
  );
}