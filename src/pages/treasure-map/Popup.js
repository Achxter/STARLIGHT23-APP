import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import {
  SubHeadBody,
  SubSubHeadBody,
} from '@/components/pages/about-us/styling/texts';

//dynamic window dimensions checker
function getWindowsDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowsDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowsDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Popup = (props) => {
  useEffect(() => {
    if (props.currOpen === 'abyss') {
      document.getElementById('popupAbyss').focus();
    } else if (props.currOpen === 'labrys') {
      document.getElementById('popupLabrys').focus();
    } else if (props.currOpen === 'elysium') {
      document.getElementById('popupElysium').focus();
    }
  });

  const { height, width } = useWindowDimensions();

  const fade = keyframes`from {opacity: 0%}; to {opacity: 100%}`;
  // End of Pop Up Animation
  if (props.currOpen === 'abyss') {
    return (
      <Flex
        w={width < 768 ? props.parentH : '100%'}
        h={width < 768 ? props.parentW : '100%'}
        pos="absolute"
        bgColor="rgba(0,0,0,0.7)"
        onClick={() => props.setCurrOpen('')}
        justifyContent="center"
        alignItems="center"
        p={5}
        px="10vw"
        m={0}
        top={width < 768 ? '50%' : null}
        transform={width < 768 ? 'translate(-50%, -50%)' : null}
        flexDirection="column"
        tabIndex={0}
        id="popupAbyss"
        transform={width < 768 ? 'rotate(90deg)' : null}
      >
        <SubHeadBody
          mt={{ base: 6, md: '6rem' }}
          textAlign="center"
          header={
            <>
              Aby<i>ss</i>
            </>
          }
          body={
            <>
              Stages pertama yaitu Abyss, memiliki arti sebagai tempat terbawah
              bumi yang gelap, dimana para peserta mulai berdatangan untuk memulai
              perjalanan panjang dengan bakat unik yang mereka miliki. Stage
              pertama merupakan proses penyaringan pertama bagi Isthara. Dalam
              stage ini, akan diadakan seleksi pertama (30 Isthara) untuk
              menyaring Isthara-Isthara mana yang masih harus berlatih, Isthara
              mana yang siap untuk tampil pada stages berikutnya
            </>
          }
        />
      </Flex>
    );
  }
  if (props.currOpen === 'labrys') {
    return (
      <Flex
        w={width < 768 ? props.parentH : '100%'}
        h={width < 768 ? props.parentW : '100%'}
        pos="absolute"
        bgColor="rgba(0,0,0,0.7)"
        onClick={() => props.setCurrOpen('')}
        justifyContent="center"
        alignItems="center"
        p={5}
        px="10vw"
        m={0}
        top={width < 768 ? '50%' : null}
        transform={width < 768 ? 'translate(-50%, -50%)' : null}
        flexDirection="column"
        tabIndex={0}
        id="popupLabrys"
        transform={width < 768 ? 'rotate(90deg)' : null}
      >
        <SubHeadBody
          mt={{ base: 6, md: '6rem' }}
          textAlign="center"
          header={
            <>
              Labry<i>s</i>
            </>
          }
          body={
            <>
              Labrys merupakan stage kedua dari perjalanan Starlight 2023, yang bermakna bahwa para Isthara diibaratkan akan membawa senjata api (Labrys) sebagai sumber kekuatan untuk mengembangkan kepercayaan diri-nya.
              Di stage ini, Isthara akan ditantang untuk bersinar penuh di hadapan audiens yang lebih luas dibandingkan stage sebelumnya 🔥✨
            </>
          }
        />
      </Flex>
    );
  }
  if (props.currOpen === 'elysium') {
    return (
      <Flex
        w={width < 768 ? props.parentH : '100%'}
        h={width < 768 ? props.parentW : '100%'}
        pos="absolute"
        bgColor="rgba(0,0,0,0.7)"
        onClick={() => props.setCurrOpen('')}
        justifyContent="center"
        alignItems="center"
        p={5}
        px="10vw"
        m={0}
        top={width < 768 ? '50%' : null}
        transform={width < 768 ? 'translate(-50%, -50%)' : null}
        flexDirection="column"
        tabIndex={0}
        id="popupElysium"
        transform={width < 768 ? 'rotate(90deg)' : null}
      >
        <SubHeadBody
          mt={{ base: 6, md: '6rem' }}
          textAlign="center"
          header={
            <>
              Ely<i>s</i>ium
            </>
          }
          body={
            <>
              Elysium merupakan tahap terakhir dari perjalanan JOURNEY OF THE VOYAGERS 🗺️ dimana Isthara akan berlabuh dan menoreh sejarah yang mengesankan bagi Starlight 2023.
              🪄 Stage ini akan menjadi jawaban bagi impian seluruh Isthara yang telah berproses dan melewati perjalanan panjang dalam mengasah potensi dan talenta dalam diri mereka.
            </>
          }
        />
      </Flex>
    );
  }
  return null;
};
export default Popup;
