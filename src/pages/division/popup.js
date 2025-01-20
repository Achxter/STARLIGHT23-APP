import { useEffect, useMemo, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { SubHeadBody } from '@/components/pages/about-us/styling/texts';

//SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';

import styles from './popup.module.css';
import customCursorUrl from '@/asset/images/cursor/Cursor (Hover).png';

const Popup = (props) => {
  useEffect(() => {
    document.getElementById('popup').focus();
    setTimeout(() => setAnimation('card-finished'), 4000);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animation, setAnimation] = useState('');

  //ini harus diformat dulu hehehe
  function formatString(string) {
    return string.split('').map((letter, idx) => {
      if (
        letter.toUpperCase() === 'F' ||
        letter.toUpperCase() === 'K' ||
        letter.toUpperCase() === 'Q' ||
        letter.toUpperCase() === 'S'
      ) {
        return <i key={idx}>{letter}</i>;
      }
      return letter;
    });
  }
  const formattedName = formatString(props.selectedDivisi.name);

  const fadeIn = keyframes`from {opacity: 0%}; to {opacity: 100%}`;
  const fadeOut = keyframes`from {opacity: 100%}; to {opacity: 0%}`;

  //Stop Propagation
  function stopProp(e) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  //Create Slides
  function createSlides(index) {
    var temp = props.selectedDivisi.members.map((member, idx) => {
      return (
        <SwiperSlide key={idx}>
          <Box
            h={'100%'}
            w={'100%'}
            bgImage={
              require(`@/asset/images/pages/division/${props.selectedDivisi.name
                }/${member.split(' ')[0]}.${props.selectedDivisi.name === 'Hippocampus' ||
                  props.selectedDivisi.name === 'Nereus'
                  ? 'jpg'
                  : 'png'
                }`).default.src
            }
            bgSize="cover"
            bgPos="center"
            opacity={
              idx === index && animation !== 'card-finished' ? '0%' : '100%'
            }
            onClick={stopProp}
            sx={{
              cursor: 'url(@/asset/images/cursor/Cursor\ \(Hover\).png), auto !important',
            }}
          />
        </SwiperSlide>
      );
    });
    return temp;
  }

  const Slides = useMemo(
    () => createSlides(activeIndex),
    [animation, activeIndex]
  );

  return (
    <Flex
      w="100%"
      h="100%"
      pos="absolute"
      bgColor="rgba(0,0,0,0.7)"
      onClick={() => {
        if (animation === 'card-finished') {
          setAnimation('out');
          //wait until animation is finished
          setTimeout(() => props.setPopUp('false'), 3000);
        }
      }}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={0}
      m={0}
      top={0}
      flexDirection="column"
      tabIndex={0}
      id="popup"
      animation={animation !== 'out' ? `${fadeIn} 5s` : `${fadeOut} 3s`}
    >
      <Flex
        pos="absolute"
        top={[3, 3, '15vh']}
        px={{ base: '6vw', md: '20vw' }}
      >
        <SubHeadBody
          fontSizeB={
            `${props.selectedDivisi.name}` === 'Scylla'
              ? {
                base: 'calc(.4rem + 1.8vw)',
                md: 'lg',
                xl: 'xl',
              }
              : { base: 'calc(.4rem + 2.2vw)', md: 'lg', xl: 'xl' }
          }
          header={<>{formattedName}</>}
          body={<>{props.selectedDivisi.desc}</>}
        />
      </Flex>

      <Swiper
        className={styles.swiper}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        onClick={stopProp}
        onRealIndexChange={(el) => setActiveIndex(el.activeIndex)}
      >
        {Slides}
      </Swiper>
      {animation !== 'card-finished' && (
        <div className={styles.flipCard} onClick={stopProp}>
          <div
            className={
              animation === 'out'
                ? styles.flipCardInnerOut
                : styles.flipCardInner
            }
            onClick={stopProp}
          >
            <Box
              className={styles.flipCardFront}
              bgImage={
                require(`@/asset/images/pages/division/${props.selectedDivisi.name
                  }/${props.selectedDivisi.members[activeIndex].split(' ')[0]}.${props.selectedDivisi.name === 'Hippocampus' ||
                    props.selectedDivisi.name === 'Nereus'
                    ? 'jpg'
                    : 'png'
                  }`).default.src
              }
              bgSize="contain"
              onClick={stopProp}
            />
            <Box
              className={styles.flipCardBack}
              bgImage={
                require(`@/asset/images/pages/division/Card.png`).default.src
              }
              bgSize="contain"
              onClick={stopProp}
            />
          </div>
        </div>
      )}
    </Flex>
  );
};

export default Popup;
