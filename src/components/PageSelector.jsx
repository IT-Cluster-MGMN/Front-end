import PageButton from './PageButton';

const PageSelector = ({numPages, currentPage, selectPage}) => {

  return(
  <>
    <PageButton label='prev' onClick={() => selectPage(currentPage-1)}/>
    <PageButton label='1' onClick={() => selectPage(1)}/>

    {/*TODO: make this three buttons adapt to last page*/}
    <PageButton label={currentPage+1} onClick={() => selectPage(currentPage+1)}/>
    <PageButton label={currentPage+2} onClick={() => selectPage(currentPage+2)}/>
    <PageButton label={currentPage+3} onClick={() => selectPage(currentPage+3)}/>

    <PageButton label={numPages} onClick={() => selectPage(numPages)}/>
    <PageButton label='next' onClick={() => selectPage(currentPage+1)}/>
  </>
  )
};

export default PageSelector;
