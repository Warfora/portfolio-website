import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Grid,
  Skeleton,
  AspectRatio
} from '@chakra-ui/react';
import autorunner_img from "../assets/tb1.png";
import tetriz_img from "../assets/tb6.png";
import robsim_img from "../assets/tb2.png";
import snake_img from "../assets/tb4.png";
import mobile_img from "../assets/tb3.png";
import gato_img from "../assets/tb5.png";
import highway_img from "../assets/highway.png";
import cer_img from "../assets/cer.png";

function ExeperienceSection({ title, title2, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            {title}
          </Text>
        </Flex>
      </Heading>
      <Grid
        // templateColumns="repeat(2, 1fr)"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={50}
        p={5}
        _hover={{ shadow: 'md' }}
        borderWidth="2px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={`mode.${colorMode}.cardBG`}
        position="relative"
        rounded="md"
        
        /*1.85*/
      >
        <Flex w="100%" h="100%" alignItems="center">
          <AspectRatio ratio={1.55 / 1} w="100%" borderBottomWidth="1px">  
            <Image
              rounded="md"
              src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
              fallback={<Skeleton />}
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Box w="105%">
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="1.8"
              color={`mode.${colorMode}.subtext`}

            >
              {desc}
            </Text>

            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="3"
              color={`mode.${colorMode}.subtext`}
            >
              {title2}
            </Text>

            <Stack isInline>
              {tech.split(',').map(tag => (
                <Tag
                  size="sm"
                  padding="2 3px"  /*3*/
                  key={tag}
                  color="#4299E1"
                  fontWeight="bold"
                  /*color={`mode.${colorMode}.career.subtext`}
                  bgColor={`mode.${colorMode}.career.tagBG`}*/
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

const ExeperienceSection = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'OAMK highway',
      desc: `An information technology course, which includes: introduction to programming, databases and interfaces, and the possibilities of social media at work and in free time. Throught this course I will be able to continue studies in OAMK.`,
      title2: '',
      tech: 'C, Databases, JavaScript',
      image_url: highway_img,
    },
    {
      title: 'Autorunner',
      desc: `OSAO's second year's last project. Unity game made with a team of four, and later presented at Vectorama 2022. The player has to avoid obstacles and get coins while speed is increasing with time.`,
      title2: 'Itch.io: https://jesuli.itch.io/one-way-forward',
      tech: 'C#, Visual Studio, Unity, SharedLab, HLSL',
      image_url: autorunner_img,
    },
    {
      title: 'Elements of AI',
      desc: `AI course from university of Helsinki, that introduces to artificial intelligence and its building using Python. Completed first part regarding theory, and currently studying the second part of actual programming.`,
      title2: '',
      tech: 'Python, AI',
      image_url: cer_img,
    },
    {
        title: 'Robbery Simulator',
        desc: `First year OSAO year project. A 3d game made with a team of three. Player has to rob as many things as possible, and get points of each. A possibility to throw bottles is also included.`,
        tech: 'Blender, C#, Unity',
        image_url: robsim_img
    },
    {
      title: 'Snake',
      desc: `Tested python's pygame library, and made silly but funny snake game. Got the idea while thinking about old Nokia phones' snake game. Made on own time, since I'm interested in learning Python.`,
      tech: 'Python, PyCharm, Pygame',
      image_url: snake_img
    },
    {
        title: 'Tetris',
        desc: `Got excited after snake game and made another game, this time tetris, using sys module. Made on own time.`,
        tech: 'Python, PyCharm, PyQt5, sys',
        image_url: tetriz_img
    },
    {
        title: '3D printing course',
        desc: `On the picture 3D modeled case for Raspberry Pi, which was later printed via resin printer. Currently also working on customer's project regarding jewelry press.`,
        tech: 'Rhino, Chitubox',
        image_url: mobile_img
    },
    {
        title: 'This Portfolio site',
        desc: `Own portfolio site using mainly react and node.js. Made during school's react course as a final project. Deployed throught Netlify.com.`,
        title2:'https://github.com/Warfora/react-portfolio.git',
        tech: 'React, Node.js, Javascript, HTML, CSS',
        image_url: gato_img
    },
  ];
  return (
    <Stack
      as="main"
      padding="0.1rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="68rem" /*48*/
      paddingTop="1rem"
    >
      <Stack spacing={50}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            title2={project.title2}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
            colorMode={colorMode}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ExeperienceSection;