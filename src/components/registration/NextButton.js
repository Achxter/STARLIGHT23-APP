import { Button, Flex, Link } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import theme from '@/theme';

import { FormIstharaContext } from '@/components/context/FormIshtaraContext';
//mport fetchApi from '@/utils/fetchApi';
import { useForm } from 'react-hook-form';

//const state, type, resetForm is unused
const NextButton = ({ step, setStep, onClick, ...props }) => {
    const { state, type, resetForm, formRef, formValue, setFormValue } =
        useContext(FormIstharaContext);

    const { handleSubmit, setValue } = useForm();

    const [submit, setSubmit] = useState(false);
    const router = useRouter();

    async function saveData (data) {
        setValue('timestamp', new Date().toLocaleString() + '');
        console.log(data);
        // setFormValue({ ...formValue, ...data });
        // console.log(formValue);
        // reset();
    };

    const handleClick = () => {
        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity();
            return;
        }

        // saveData();

        setStep(step + 1);
        console.log('Step incremented:', step);

        if (step > 1) {
            // nanti harusnya 3, ini cuma buat ngetes masukin sheet
            // alert("Submitted!")
            // nanti masukin formValue ke API disini tp gajadi keanya
            router.push('/');
            return;
        }
    };
    return (
        <Flex justify="flex-end" maxW="1080px" w="100%" mx="auto" mb="2em">
            <Link
                h="3rem"
                w="9rem"
                color={theme.colors.deco[400]}
                bgColor={theme.colors.bg[700]}
                border="1px"
                as={Button}
                onClick={onClick ? onClick : handleSubmit(handleClick)}
                _hover={{ bgColor: '0,0,0', color: ' rgb(227,218,201)' }}
                {...props}
            >
                {/* ini juga harusnya 3, bukan 1 nantinya ya */}
                {step > 1 ? 'SUBMIT' : 'NEXT'}
            </Link>
        </Flex>
    );
};

export default NextButton;

//dari yang tahun 2022

/*const NextButton = ({ step, setStep, ...p }) => {
  const { state, type, resetForm, formRef } = useContext(FormIstharaContext);

  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const registUrl = {
    solo: '/api/regist/solo',
    group: '/api/regist/group',
  };

  const fixState = (_N) => {
    window.history.replaceState(
      { ...window.history.state, __N: _N ?? true },
      ''
    );
  };

  const checkFiles = (state) => {
    if (state.files) {
      for (const k in state.files) {
        if (state.files[k] && state.files[k]?.length !== 0 && !state[k]) {
          return false;
        }
      }
    } else if (state.members) {
      for (const m of state.members) {
        if (!checkFiles(m)) {
          return false;
        }
      }
    }
    return true;
  };

  let apiUrl = registUrl[type];

  const handleStep = () => {
    if (!formRef.current.checkValidity()) return;
    if (!checkFiles(state)) return;

    const stp = step + 1;
    if (stp > 4) {
      if (!submit) {
        setSubmit(true);
        fetchApi(apiUrl, state)
          .then((v) => {
            console.log('res: ', v);
            resetForm();
            setSubmit(false);
            router.push('./twib');
          })

          .catch((e) => {
            console.error('Error:', e);
            setSubmit(false);
          });
      }
      return;
    }

    setStep(stp);
    window.history.pushState({ ...window.history.state, __N: false, stp }, '');
  };

  useEffect(() => {
    const histChange = () => fixState(true);
    router.events.on('beforeHistoryChange', histChange);

    if (!window.history.state.stp) {
      window.history.state.stp = 2;
      fixState(false);
    } else {
      setStep(window.history.state.stp);
    }

    window.onpopstate = (e) => {
      if (e.state.stp) {
        setStep(e.state.stp);
      }
    };

    return () => {
      router.events.off('beforeHistoryChange', histChange);
      window.onpopstate = null;
    };
  }, [router.events, setStep]);

  return (
    <Flex justify="flex-end" maxW="1080px" w="100%" mx="auto" mb="2em">
      <Link
            h="3rem"
            w="9rem"
            color={theme.colors.deco[400]}
            bgColor={theme.colors.bg[700]}
            border="1px"
            as={Button}
            _hover={{ bgColor: '0,0,0', color: ' rgb(227,218,201)' }}
        as={Button}
        onClick={handleStep}
        {...p}
      >
        NEXT
      </Link>
    </Flex>
  );
};
export default NextButton;
*/
