import {
  Box,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';

import SearchRecent from './SearchRecent';
import SearchResult from './SearchResult';

import useSearchResult from '@/hooks/useSearchResult';
import useSearchRecent from 'hooks/useSearchRecent';
import CloseIcon from 'public/assets/icons/arrow/close.svg';
import SearchIcon from 'public/assets/icons/generals/search.svg';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  placeholder: string;
}

export default function SearchModal({
  isOpen,
  onClose,
  placeholder,
}: SearchModalProps) {
  const [input, setInput] = useState<string>('');

  const [searchInput] = useDebounce([input], 300);
  const [isExist, setIsExist] = useState(true);
  const { recentGetItem } = useSearchRecent();
  const hasRecent = recentGetItem && recentGetItem.length > 0;
  const { Event, EventLoading } = useSearchResult(searchInput);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', onClose);
    return () => {
      router.events.off('routeChangeStart', onClose);
    };
  }, [onClose, router]);
  const colorBgInput = useColorModeValue('primary.gray.300', 'dark.300');
  const colorBgModal = useColorModeValue('primary.gray.200', 'transparent');
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        size={{
          base: 'xl',
          md: '2xl',
        }}
      >
        <ModalOverlay backdropFilter="blur(0.625rem)" />

        <ModalContent bg={colorBgModal}>
          <ModalHeader
            px={0}
            py={0}
            overflow="hidden"
            borderRadius={
              searchInput != '' || (isExist && hasRecent)
                ? '0.5rem 0.5rem 0 0'
                : '0.5rem'
            }
            border="0.0625rem solid"
          >
            <HStack bg={colorBgInput} px={5} py={3}>
              <SearchIcon />

              <Input
                variant="search"
                placeholder={placeholder}
                value={input}
                onChange={event => setInput(event.target.value)}
              />

              {EventLoading && !!searchInput ? (
                <Spinner
                  thickness="3px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              ) : (
                <Box
                  onClick={() => {
                    setInput('');
                  }}
                  cursor="pointer"
                  display={!!input ? 'flex' : 'none'}
                >
                  <CloseIcon />
                </Box>
              )}
            </HStack>
          </ModalHeader>

          {(searchInput || (isExist && hasRecent)) && (
            <ModalBody
              borderStyle="solid"
              borderWidth={'0 0.0625rem 0.0625rem 0.0625rem'}
              padding={0}
              borderRadius={'0 0 0.5rem 0.5rem'}
            >
              {searchInput && <SearchResult Event={Event} val={searchInput} />}
              {!searchInput && (
                <SearchRecent
                  onExist={exist => {
                    setIsExist(exist);
                  }}
                />
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
