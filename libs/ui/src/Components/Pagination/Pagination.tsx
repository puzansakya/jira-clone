import { Button, Flex, IconButton, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { usePagination, DOTS } from './usePagination';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export interface PaginationProps {
  onPageChange: any;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  customStyle: {
    Container: any;
    BtnPrevious: any;
    BtnDots: any;
    BtnNext: any;
    BtnNumber: any;
  };
}

export const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    customStyle,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange({
      currentPage: currentPage + 1,
      pageSize,
    });
  };

  const onPrevious = () => {
    onPageChange({
      currentPage: currentPage - 1,
      pageSize,
    });
  };

  const lastPage: number = paginationRange[paginationRange.length - 1];

  return (
    <List display="flex" gap={4} id="container" {...customStyle?.Container}>
      <ListItem>
        <IconButton
          id="btnPrevious"
          size="sm"
          icon={<ChevronLeftIcon />}
          onClick={onPrevious}
          isDisabled={currentPage === 1}
          aria-label="previous page"
          {...customStyle?.BtnPrevious}
        />
      </ListItem>
      {paginationRange.map((pageNumber: number | string) => {
        if (pageNumber === DOTS) {
          return (
            <ListItem key={pageNumber}>
              <Button id="btnDots" size="sm" {...customStyle?.BtnDots}>
                &#8230;
              </Button>
            </ListItem>
          );
        }
        const isSelected = pageNumber === currentPage;

        const sx = {
          backgroundColor: isSelected ? 'blue.500' : '',
          color: isSelected ? 'white' : '',
        };

        return (
          <ListItem key={pageNumber}>
            <Button
              id="btnNumber"
              size="sm"
              sx={sx}
              onClick={() =>
                onPageChange({ currentPage: pageNumber, pageSize })
              }
              {...customStyle?.BtnNumber}
            >
              {pageNumber}
            </Button>
          </ListItem>
        );
      })}
      <ListItem>
        <IconButton
          id="btnNext"
          size="sm"
          icon={<ChevronRightIcon />}
          onClick={onNext}
          isDisabled={currentPage === lastPage}
          aria-label="Next page"
          {...customStyle?.BtnNext}
        />
      </ListItem>
    </List>
  );
};
