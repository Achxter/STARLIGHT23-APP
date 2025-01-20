import { React, useState, useEffect } from 'react';
import { Flex, Box, Image, AspectRatio } from '@chakra-ui/react';
import TM from '@/asset/images/treasure/TM_120 kosong.png';
import AbyssOpen from '@/asset/images/treasure/Abyss Terbuka.png';
import AbyssClose from '@/asset/images/treasure/Abyss Tertutup.png';
import LabyrssOpen from '@/asset/images/treasure/Labyrss Terbuka.png';
import LabyrssClose from '@/asset/images/treasure/Labyrss Tertutup.png';
import ElysiumOpen from '@/asset/images/treasure/Elysium REV PSB 2.png';
import ElysiumClose from '@/asset/images/treasure/Elysium_(cangkang_tutup)_REV.png';

function tm(props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (screenWidth >= 992) {
    // Large screen (md and above)
    return (
      <AspectRatio
        w="100%"
        h="100%"
        ratio={16 / 9}
        paddingBottom="16vh"
        my={{ base: '10', md: '4rem' }}
      >
        <Flex h="100%" position="relative">
          <Image
            maxW="none"
            w="100vw"
            h="initial"
            objectFit="cover"
            src={TM.src}
            alt=""
          ></Image>
          <Box
            position="absolute"
            bottom="27vw"
            left="16vw"
            onClick={() => props.setOpenedStage('abyss')}
          >
            <Image
              w="18vw"
              objectFit="cover"
              src={props.isAbyssOpened ? AbyssOpen.src : AbyssClose.src}
              alt=""
            />
          </Box>
          <Box
            position="absolute"
            bottom="19vw"
            left="41vw"
            onClick={() => props.setOpenedStage('labrys')}
          >
            <Image
              w="18vw"
              objectFit="cover"
              src={props.isLabrysOpened ? LabyrssOpen.src : LabyrssClose.src}
              alt=""
            />
          </Box>
          <Box
            position="absolute"
            bottom="33vw"
            left="65vw"
            onClick={() => props.setOpenedStage('elysium')}
          >
            <Image
              w="18vw"
              objectFit="cover"
              src={props.isElysiumOpened ? ElysiumOpen.src : ElysiumClose.src}
              alt=""
            />
          </Box>
        </Flex>
      </AspectRatio>
    );
  } else if (screenWidth >= 768) {
    return (
      <AspectRatio
        w="100%"
        h="100%"
        ratio={16 / 9}
        paddingBottom="16vh"
        my={{ base: '10', md: '4rem' }}
      >
        <Flex h="100%" position="relative">
          <Image
            maxW="none"
            w="100vw"
            h="initial"
            objectFit="cover"
            src={TM.src}
            alt=""
          ></Image>
          <Box
            position="absolute"
            bottom="33vw"
            left="16vw"
            onClick={() => props.setOpenedStage('abyss')}
          >
            <Image
              w="18vw"
              objectFit="cover"
              src={props.isAbyssOpened ? AbyssOpen.src : AbyssClose.src}
              alt=""
            />
          </Box>
          <Box
            position="absolute"
            bottom="26vw"
            left="43vw"
            onClick={() => props.setOpenedStage('labrys')}
          >
            <Image
              w="18vw"
              objectFit="cover"
              src={props.isLabrysOpened ? LabyrssOpen.src : LabyrssClose.src}
              alt=""
            />
          </Box>
          <Box
            position="absolute"
            bottom="39vw"
            left="65vw"
            onClick={() => props.setOpenedStage('elysium')}
          >
            <Image
              w="18vw"
              objectFit="cover"
              src={props.isElysiumOpened ? ElysiumOpen.src : ElysiumClose.src}
              alt=""
            />
          </Box>
        </Flex>
      </AspectRatio>
    );
  } else {
    return (
      <AspectRatio
        w="100vh"
        h="100vh"
        ratio={16 / 9}
        marginTop="0"
        marginBottom="0"
        my={{ base: '10', md: '4rem' }}
        position="relative"
        transform={props.currOpen !== '' ? 'translate(0, 25%)' : ''}
      >
        <Flex h="100%" position="relative" transform="rotate(90deg)">
          <Image
            maxW="none"
            w="100vh"
            h="100vw"
            objectFit="cover"
            src={TM.src}
            alt=""
          ></Image>
          <Box
            position="absolute"
            bottom="44vh"
            left="16vh"
            onClick={() => props.setOpenedStage('abyss')}
          >
            <Image
              w="35vw"
              objectFit="cover"
              src={props.isAbyssOpened ? AbyssOpen.src : AbyssClose.src}
              alt=""
              marginTop="4vh"
            />
          </Box>
          <Box
            position="absolute"
            bottom="36vh"
            left="42vh"
            onclick={() => props.setOpenedStage('labrys')}
          >
            <Image
              w="35vw"
              objectFit="cover"
              src={props.isLabrysOpened ? LabyrssOpen.src : LabyrssClose.src}
              alt=""
              marginTop="6vh"
            />
          </Box>
          <Box
            position="absolute"
            bottom="50vh"
            right="18vh"
            onClick={() => props.setOpenedStage('elysium')}
          >
            <Image
              w="35vw"
              objectFit="cover"
              src={props.isElysiumOpened ? ElysiumOpen.src : ElysiumClose.src}
              alt=""
              marginTop="8vh"
            />
          </Box>
        </Flex>
      </AspectRatio>
    );
  }
}

export default tm;
