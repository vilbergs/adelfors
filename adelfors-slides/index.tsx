import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  Text,
  SpectacleLogo,
  Image,
  Notes,
  SlideLayout,
  OrderedList,
  ListItem,
  Box,
  UnorderedList,
} from 'spectacle'
// @ts-ignore
import MiddleEarth from './images/middle-earth.jpg'
// @ts-ignore
import MiddleEarthPath from './images/middle-earth-path.jpg'
// @ts-ignore
import Me from './images/me.jpg'
// @ts-ignore
import VisionScope from './images/vision-scope.jpg'
// @ts-ignore
import RoleImage from './images/roles.jpg'
import './globals.css'
import { ThemeProvider } from '@slides/components/theme-provider'
// @ts-ignore
import Architect from './images/roles/architect.jpeg'
// @ts-ignore
import Backend from './images/roles/backend.jpeg'
// @ts-ignore
import DataPerson from './images/roles/data.jpeg'
// @ts-ignore
import Designer from './images/roles/designer.jpeg'
// @ts-ignore
import Frontend from './images/roles/frontend.jpeg'
// @ts-ignore
import Leader from './images/roles/leader.jpeg'
// @ts-ignore
import TestQA from './images/roles/test-qa.jpeg'
// @ts-ignore
import Infra from './images/roles/infra.jpeg'
// @ts-ignore
import Processes from './images/processes.jpeg'
// @ts-ignore
import APIFirst from './images/diagrams/api.png'

const Cards = ({ cards }: { cards: { title: string; points: string[] }[] }) => {
  return (
    <div className="grid grid-cols-3 justify-center gap-16 px-11">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className="border-4 rounded-lg p-12 text-white font-medium"
        >
          <span className="text-2xl">
            {index + 1}. {card.title}
          </span>
          <div className="mt-10">
            {card.points.map((point) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-lg font-medium leading-none">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const Roles = [
  { title: 'Arkitekt', image: Architect },
  { title: 'Infra/DevOps', image: Infra },
  { title: 'Backend', image: Backend },
  { title: 'Frontend', image: Frontend },
  { title: 'UI / UX', image: Designer },
  { title: 'Test / QA', image: TestQA },
  { title: 'Data Analyst', image: DataPerson },
  { title: 'Ledare', image: Leader },
]

const PlanningSections = [
  {
    title: 'Vision och Scope',
    image: VisionScope,
    points: [
      'Varför är detta bra?',
      'Vilka är kunderna?',
      'Mål',
      'Begränsningar, ss. Budget eller Juridiska',
    ],
  },
  {
    title: 'Teamstruktur',
    image: RoleImage,
    points: Roles.map((role) => role.title),
  },
  {
    title: 'Samarbetsprocesser',
    image: Processes,
    points: ['Agila processer', 'SCRUM', 'Kanban'],
  },
]

const ArchitecturePoints = [
  'Microservices',
  'Monolith',
  'Serverless',
  'API First',
]

const DesignSections = [
  {
    title: 'Skalbarhet och prestanda',
    image: '',
    points: [
      'Hur många kommer att använda produkten?',
      'Hur viktig är prestanda?',
      'Vilken säkerhetsnivå?',
      'On-premise vs. Cloud?',
    ],
  },
  {
    title: 'Arkitektur',
    image: '',
    points: ArchitecturePoints,
  },
  {
    title: 'Verktyg och ramverk',
    image: '',
    points: [
      'Kort om JavaScript / TypeScript',
      'Backend',
      'Frontend',
      'Meta-ramverk',
    ],
  },
]

const ImplementationSections = [
  {
    title: 'Samarbete',
    points: [
      'Versionhantering',
      'Kodstandarder',
      'Api Design', // REST / GRAPHQL, API kontrakt / Swagger
      'Frontend', //
    ],
  },
  {
    title: 'Testning',
    points: ['TDD', 'Unit Testning', 'Integration Testing', 'E2E Testing'],
  },
]

const Presentation = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Deck
      theme={{
        colors: {
          secondary: 'white',
          tertiary: 'hsl(var(--background))',
        },
      }}
      template={() => <DefaultTemplate />}
    >
      <Slide>
        <FlexBox height="100%">
          <Heading>Utvecklarkartan 🗺️</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Image src={MiddleEarth} height="100%"></Image>
        </FlexBox>

        <Notes>
          <ul>
            <li>Känner ni igen kartan?</li>
            <li>Det är Middle Earth från Lord of the rings</li>
            <li>Där Frodo och hans vänner tog ringen till Mordor</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Image src={MiddleEarthPath} height="100%"></Image>
        </FlexBox>

        <Notes>
          <ul>
            <li>
              Här ser ni en annan bild med vägen de tog till mordor, samt vilka
              som var inblandade i varje steg
            </li>
            <li>
              Mitt mål idag är att ge er en vägledare igenom
              applikationsutveckling. Så att ni kan navigera igenom det komplexa
              landskap som är mjukvaruutveckling
            </li>
          </ul>
        </Notes>
      </Slide>
      <SlideLayout.HorizontalImage
        src={Me as string}
        title="Vem är jag?"
        alt="Image of me rockin' out"
      ></SlideLayout.HorizontalImage>
      <Slide>
        <Heading textAlign="left">Agenda</Heading>
        <Box height="100%">
          <OrderedList>
            <ListItem>💡 Planering</ListItem>
            <ListItem>🎨 Design</ListItem>
            <ListItem>👨🏻‍💻 Implementation</ListItem>
            <ListItem>🍲 Lunch</ListItem>
            <ListItem>🕺 Demo</ListItem>
          </OrderedList>
          <Notes>
            <ul>
              <li>Det kommer bli en del att gå igenom</li>
              <li>
                Vissa saker kommer vara mer intressanta än andra för var och en,
                det är helt okej.
              </li>
            </ul>
          </Notes>
        </Box>
      </Slide>
      <Slide>
        <Heading textAlign="left">💡 Planering</Heading>
        <Box width="100%" height="100%">
          <Cards cards={PlanningSections} />
        </Box>
      </Slide>
      <SlideLayout.TwoColumn
        left={<Image src={PlanningSections[0].image} />}
        right={
          <>
            <Heading fontSize="h3">{PlanningSections[0].title}</Heading>
            <UnorderedList>
              {PlanningSections[0].points.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </UnorderedList>
          </>
        }
      />
      <SlideLayout.TwoColumn
        left={<Image src={PlanningSections[1].image} />}
        right={
          <>
            <Heading fontSize="h3">{PlanningSections[1].title}</Heading>
            <UnorderedList>
              {PlanningSections[1].points.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </UnorderedList>
          </>
        }
      />
      {Roles.map((role) => (
        <SlideLayout.TwoColumn
          left={<Image src={role.image} />}
          right={<Heading fontSize="h3">{role.title}</Heading>}
        />
      ))}
      <SlideLayout.TwoColumn
        left={<Image src={PlanningSections[2].image} />}
        right={
          <>
            <Heading fontSize="h3">{PlanningSections[2].title}</Heading>
            <UnorderedList>
              {PlanningSections[2].points.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </UnorderedList>
          </>
        }
      />
      <SlideLayout.Center>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Abstract_Kanban_Board.svg/2880px-Abstract_Kanban_Board.svg.png"></Image>
      </SlideLayout.Center>
      <Slide>
        <Heading textAlign="left">🎨 Design</Heading>
        <Box width="100%" height="100%">
          <Cards cards={DesignSections} />
        </Box>
      </Slide>
      <SlideLayout.TwoColumn
        left={<Image src={DesignSections[0].image} />}
        right={
          <>
            <Heading fontSize="h3">{DesignSections[0].title}</Heading>
            <UnorderedList></UnorderedList>
          </>
        }
      />
      {DesignSections[0].points.map((item) => (
        <SlideLayout.Statement>{item}</SlideLayout.Statement>
      ))}

      {/* Architecture */}
      <SlideLayout.TwoColumn
        left={<Image src={DesignSections[1].image} />}
        right={
          <>
            <Heading fontSize="h3">{DesignSections[1].title}</Heading>
            <UnorderedList>
              {DesignSections[1].points.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </UnorderedList>
          </>
        }
      />

      <SlideLayout.Center>
        <Heading fontSize="h3">Microservices</Heading>
        <Image src="https://miro.medium.com/v2/resize:fit:1280/1*_r8CjUhU9N96y6pjtVbrbA.gif"></Image>
      </SlideLayout.Center>

      <SlideLayout.Statement>Monolith</SlideLayout.Statement>
      <SlideLayout.Statement>Serverless</SlideLayout.Statement>
      <SlideLayout.Statement>API First</SlideLayout.Statement>

      <SlideLayout.Center>
        <Image src={APIFirst}></Image>
      </SlideLayout.Center>

      <SlideLayout.TwoColumn
        left={<Image src={DesignSections[2].image} />}
        right={
          <>
            <Heading fontSize="h3">{DesignSections[2].title}</Heading>
            <UnorderedList>
              {DesignSections[2].points.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </UnorderedList>
          </>
        }
      />

      <SlideLayout.Code title="JavaScript" language="javascript">
        {`functon add(a, b) {
  return a + b
}

const a = 1
const b = 2

const result = add(1,2) // 3`}
      </SlideLayout.Code>

      <SlideLayout.Code title="TypeScript" language="typescript">
        {`functon add(a: number, b: number) {
  return a + b
}

const a = 1
const b = 2

const result = add(1,2) // 3`}
      </SlideLayout.Code>
      <SlideLayout.Code title="Komplexa typer" language="typescript">
        {`interface Student {
  name: string
  age: string 
}

function createUser(name, age): Student {
  return {
    name: name,
    age: age,
  }
}
`}
      </SlideLayout.Code>

      <Slide>
        <Heading textAlign="left">👨🏻‍💻 Implementation</Heading>
        <Box width="100%" height="100%">
          <Cards cards={ImplementationSections} />
        </Box>
      </Slide>

      <SlideLayout.Statement>Versionhantering</SlideLayout.Statement>
      <SlideLayout.Center>
        <Image src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*9yJY7fyscWFUVRqnx0BM6A.png"></Image>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Kodstandarder</Heading>
        <Text>camelCase? Filnamn, Mappstruktur</Text>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>API Design</Heading>
        <Text>REST, GRAPHQL, API kontrakt, Swagger</Text>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Frontend</Heading>
        <Image src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TxY7R82KHVB_nP7IFd_r0w.jpeg"></Image>
      </SlideLayout.Center>

      <SlideLayout.Statement>Versionhantering</SlideLayout.Statement>
      <SlideLayout.MultiCodeLayout
        numColumns={2}
        codeBlocks={[
          {
            code: `functon add(a: number, b: number) {
  return a + b
}

const a = 1
const b = 2

const result = add(1,2) // 3`,
            language: 'js',
          },
          {
            code: `test('Adds two numbers', () => {
  const actualResult = add(1, 2)
  
  expect(actualResult).toBe(3)
})`,
            language: 'js',
          },
        ]}
      ></SlideLayout.MultiCodeLayout>

      {/* 'Lunch' */}
      <SlideLayout.Center>
        <Image src="https://i.pinimg.com/originals/b9/08/a3/b908a31737c91779acd57f7ea2f61c05.jpg"></Image>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Demo</Heading>
      </SlideLayout.Center>
    </Deck>
  </ThemeProvider>
)

createRoot(document.getElementById('app')!).render(<Presentation />)
