import Container from '../shared/Container';

const numbersData = [
  {
    id: 1,
    number: '+100',
    text: 'AI Models Implemented',
  },
  {
    id: 2,
    number: '+250',
    text: 'Enterprise Clients',
  },
  {
    id: 3,
    number: '99.9%',
    text: 'Uptime Guarantee',
  },
  {
    id: 4,
    number: '+10',
    text: 'Years of Innovation',
  },
];

const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border 
                     shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4"
        >
          {numbersData.map(({ id, number, text }) => (
            <div className="text-center px-5 " key={id}>
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                {number}
              </h2>
              <p className="mt-2 text-heading-3">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
