import { Link } from 'react-router-dom'

import {
  Card,
  Description,
  Title,
  Image,
  CardContainer,
  Star,
  Avaliacao,
  InfoCard
} from './styles'

import Tag from '../Tag'
import sushi from '../../assets/images/sushi.png'
import prato2 from '../../assets/images/prato2.png'
import Button from '../Button'
import { ButtonLink } from '../Button/styles'

const Listing = () => (
  <CardContainer>
    <Card>
      <Image src={sushi} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex'
        }}
      >
        <Tag size="small">Destaque da semana</Tag>
        <Tag size="small">Japonesa</Tag>
      </div>
      <InfoCard>
        <Title>Hioki Sushi</Title>
        <Avaliacao>
          4.9<Star>★</Star>
        </Avaliacao>
      </InfoCard>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos. Entrega rápida, embalagens cuidadosas e
        qualidade garantida.Experimente o Japão sem sair do lar com nosso
        delivery!
      </Description>
      <ButtonLink to="/food" title="Clique para saber mais">
        Saiba mais
      </ButtonLink>
    </Card>
    <Card>
      <Image src={prato2} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex'
        }}
      >
        <Tag size="small">Italiana</Tag>
      </div>
      <InfoCard>
        <Title>La Dolce Vita Trattoria</Title>
        <Avaliacao>
          4.6 <Star>★</Star>
        </Avaliacao>
      </InfoCard>
      <Description>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Description>
      <Button type="link" to="/food" title="Clique para saber mais">
        Saiba mais
      </Button>
    </Card>
    <Card>
      <Image src={prato2} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex'
        }}
      >
        <Tag size="small">Italiana</Tag>
      </div>
      <InfoCard>
        <Title>La Dolce Vita Trattoria</Title>
        <Avaliacao>
          4.6 <Star>★</Star>
        </Avaliacao>
      </InfoCard>
      <Description>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Description>
      <Button type="link" to="/food" title="Clique para saber mais">
        Saiba mais
      </Button>
    </Card>
    <Card>
      <Image src={prato2} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex'
        }}
      >
        <Tag size="small">Italiana</Tag>
      </div>
      <InfoCard>
        <Title>La Dolce Vita Trattoria</Title>
        <Avaliacao>
          4.6 <Star>★</Star>
        </Avaliacao>
      </InfoCard>
      <Description>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Description>
      <Button type="link" to="/food" title="Clique para saber mais">
        Saiba mais
      </Button>
    </Card>
    <Card>
      <Image src={prato2} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex'
        }}
      >
        <Tag size="small">Italiana</Tag>
      </div>
      <InfoCard>
        <Title>La Dolce Vita Trattoria</Title>
        <Avaliacao>
          4.6 <Star>★</Star>
        </Avaliacao>
      </InfoCard>
      <Description>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Description>
      <Button type="link" to="/food" title="Clique para saber mais">
        Saiba mais
      </Button>
    </Card>
    <Card>
      <Image src={prato2} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex'
        }}
      >
        <Tag size="small">Italiana</Tag>
      </div>
      <InfoCard>
        <Title>La Dolce Vita Trattoria</Title>
        <Avaliacao>
          4.6 <Star>★</Star>
        </Avaliacao>
      </InfoCard>
      <Description>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Description>
      <Button type="link" to="/food" title="Clique para saber mais">
        Saiba mais
      </Button>
    </Card>
  </CardContainer>
)

export default Listing
