import { servicesData } from '../../utils/Services-data';
import Service from '../cards/Service';
import Container from '../shared/Container';
import Paragraph from '../shared/Paragraph';
import Title from '../shared/Title';

const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> Our AI Services </Title>
          <Paragraph className="text-heading-3">
            We offer a range of AI services to help businesses leverage the
            power of artificial intelligence. Our services include:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map(({ title, description, icon }, key) => (
            <Service
              title={title}
              description={description}
              icon={icon}
              key={key}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
