import React from 'react';
import { useRouter } from 'next/router';
import { openModal, closeModal } from '@redq/reuse-modal';
import MobileDrawer from './mobile-drawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
} from './header.style';
import Search from 'features/search/search';
// import LogoImage from 'assets/images/logo.svg';
import LogoImage from 'assets/images/lfh-pink-logo.png';

import { SearchIcon } from 'assets/icons/SearchIcon';
import { LongArrowLeft } from 'assets/icons/LongArrowLeft';
import Logo from 'layouts/logo/logo';
import LanguageSwitcher from './menu/language-switcher/language-switcher';
import useDimensions from 'utils/useComponentSize';
import { BooleanSchema } from 'yup';

type MobileHeaderProps = {
  className?: string;
  closeSearch?: any;
  isSticky: boolean;
  isHomePage: boolean;
};

const SearchModal: React.FC<{}> = () => {
  const onSubmit = () => {
    closeModal();
  };
  return (
    <SearchModalWrapper>
      <SearchModalClose type='submit' onClick={() => closeModal()}>
        <LongArrowLeft />
      </SearchModalClose>
      <Search
        className='header-modal-search'
        showButtonText={false}
        onSubmit={onSubmit}
      />
    </SearchModalWrapper>
  );
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className, isSticky, isHomePage }) => {
  const [mobileHeaderRef, dimensions] = useDimensions();

  const handleSearchModal = () => {
    openModal({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%',
      },
      closeOnClickOutside: false,
      component: SearchModal,
      closeComponent: () => <div />,
    });
  };
  const showSearch = isHomePage && isSticky;

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        <LogoWrapper>
          <Logo imageUrl={LogoImage} alt='shop logo' />
        </LogoWrapper>

        <LanguageSwitcher />

        {showSearch && 
          <SearchWrapper onClick={handleSearchModal} className='searchIconWrapper'>
            <SearchIcon />
          </SearchWrapper>
        }
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
