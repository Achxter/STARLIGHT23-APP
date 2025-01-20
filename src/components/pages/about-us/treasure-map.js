import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import NextLink from 'next/link';

import vidFrame from '@/asset/images/pages/about-us/frame.png';
import bgTreasure from '@/asset/images/pages/about-us/coming-soon.jpg';

// pake frame
const TreasureMap = () => {
  const float = keyframes`
    0% {transform: translateY(4px);}
    50% {transform: translateY(-4px);}
    100% {transform: translateY(4px);}
  `;

  const floatAnimation = `${float} infinite 2s ease-in-out`;

  return (
    <Flex w="100%" minH="100%" justifyContent="center" alignItems="center">
      <Image
        src={vidFrame.src}
        alt="Latest News"
        w={{ base: '100%', md: '70vw', xl: '60vw' }}
        px={{ base: '6', sm: '16', md: '0' }}
        pointerEvents="none"
        zIndex={3}
      />
      <Flex pos="absolute" justifyContent="center" alignItems="center">
        <NextLink href="/treasure-map" passHref>
          <Image
            src={bgTreasure.src}
            w={{
              base: 'calc(16 * 5.2vw)',
              sm: 'calc(16 * 4.7vw)',
              md: 'calc(16 * 4vw)',
              xl: 'calc(16 * 3.4vw)',
            }}
            sizes="cover"
            transition=".3s ease-out all"
            _hover={{
              transform: 'scale(1.05)',
            }}
          />
        </NextLink>
        <Text
          animation={floatAnimation}
          mt={{ base: '-14vw', md: '-12vw', xl: '-9vw' }}
          pos="absolute"
          textAlign="center"
          fontFamily="Exodus"
          fontSize={{
            base: 'calc(.3rem + 6vw)',
            md: 'calc(.2rem + 5.5vw)',
            xl: 'calc(.1rem + 4.5vw)',
          }}
          textShadow={Array(3)
            .fill()
            .map((e, i) => `0 0 ${i + 4}0px #78a0cd`)
            .join(', ')}
          bgGradient="linear(to-b, #a5bff7, #81addf)"
          bgClip="text"
        >
          TREA<i>S</i>URE MAP
        </Text>
      </Flex>
    </Flex>
  );
};

// no frame
// const TreasureMap = () => {
//   return (
//     <Flex
//       pb={20}
//       w="100%"
//       minH="100%"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Image
//         src={bgTreasure.src}
//         w={{ base: '100%', md: '70vw', xl: '60vw' }}
//         px={{ base: '6', sm: '16', md: '0' }}
//         sizes="cover"
//       />
//       <Text
//         mt="-16.5vw"
//         pos="absolute"
//         textAlign="center"
//         fontFamily="Exodus"
//         fontSize={{
//           base: 'calc(.4rem + 6.5vw)',
//           md: 'calc(.6rem + 7vw)',
//         }}
//         textShadow={Array(1)
//           .fill()
//           .map((e, i) => `0 0 ${i + 4}0px #78a0cd`)
//           .join(', ')}
//         bgGradient="linear(to-b, #a5bff7, #81addf)"
//         bgClip="text"
//       >
//         COMING <i>S</i>OON
//       </Text>
//     </Flex>
//   );
// };

export default TreasureMap;
