import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useState } from 'react';

import theme from '@/theme';
import { PageTitle, SubSubHeado, FormSubHeading } from '@/components/styles';

import istharaSolo from '@/asset/images/regist/isthara-solo.PNG';
import istharaGroup from '@/asset/images/regist/isthara-group.PNG';
import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';
const CardText = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Exodus"
      fontSize={{ base: '1.75rem', md: '3rem', sm: '2.25rem' }}
      color={theme.colors.deco[400]}
      cursor="default"
      {...props}
    >
      {children}
    </Text>
  );
};

const GlowOnHoverBox = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      w="25rem"
      h="25rem"
      bgColor="rgba(1, 1, 1, 0.5)"
      textAlign="center"
      borderWidth="7px"
      borderColor={theme.colors.deco[500]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="box-shadow 0.1s ease"
      boxShadow={isHovered ? '0 0 20px rgba(255, 255, 255, 0.5)' : 'none'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="default"
    >
      {/* <Box
        borderWidth="3px"
        borderColor={theme.colors.deco[500]}
        w="22rem"
        h="22rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="1rem"
      >
        <Text
          fontFamily="Exodus"
          fontSize={{ base: '1.75rem', md: '3rem', sm: '2.25rem' }}
          color={theme.colors.deco[400]}
          textShadow={isHovered ? '0 0 20px rgba(233, 201, 143, 0.5)' : 'none'}
        >
          {children}
        </Text>
      </Box> */}
    </Flex>
  );
};

const formIshtara = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      w="100%"
      pos="relative"
      justifyContent="center"
      alignItems="center"
      py={{ base: '10', md: '4rem' }}
      px={{ base: '6', md: '4rem' }}
      flexDirection="column"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
    >
      <PageTitle textShadow="0 0 20px #b8dafe">
        Ahoy, <i>s</i>tarlighter<i>s</i>!
      </PageTitle>
      <Flex textAlign="center">
        <SubSubHeado>Are you ready to embark on a new journey?</SubSubHeado>
      </Flex>
      <Flex
        w="100%"
        pos="relative"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        overflowY="hidden"
        textAlign="center"
      >
        <Flex
          w="70%"
          mx="auto"
          alignItems="center"
          justifyContent="center"
          mt="4rem"
          mb={{ base: '6rem', md: '10rem' }}
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: '10', md: '150', xl: '200' }}
        >
          <NextLink href="./ishtaraReg/solo" passHref>
            <Link>
              <Image
                w="90%"
                textAlign="center"
                borderWidth="7px"
                borderColor={theme.colors.deco[500]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="box-shadow 0.1s ease"
                transition="box-shadow 0.1s ease"
                _hover={{
                  filter: 'drop-shadow(0px 0px 10px #fff)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                src={istharaSolo.src}
              />
            </Link>
          </NextLink>

          <NextLink href="./ishtaraReg/group" passHref>
            <Link>
              <Image
                w="90%"
                textAlign="center"
                borderWidth="7px"
                borderColor={theme.colors.deco[500]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="box-shadow 0.1s ease"
                transition="box-shadow 0.1s ease"
                _hover={{
                  filter: 'drop-shadow(0px 0px 10px #fff)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                src={istharaGroup.src}
              />
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default formIshtara;
