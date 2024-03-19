import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import PageButton from "./PageButton";

const PageSelector = ({ numPages, currentPage, selectPage }) => {
  const middleButtons = [];
  console.log(currentPage);
  let i, j;
  if (currentPage === 1) {
    for (i = currentPage + 1, j = 0; i < numPages && j < 3; i++, j++) {
      middleButtons.push(i);
    }
  } else if (currentPage >= numPages - 2) {
    console.log("lol");
    for (i = numPages - 3, j = 0; i < numPages && j < 3; i++, j++) {
      middleButtons.push(i);
    }
  } else {
    for (i = currentPage, j = 0; i < numPages && j < 3; i++, j++) {
      middleButtons.push(i);
    }
  }

  return (
    <>
      <div className="w-full flex flex-row justify-center">
        {numPages !== 1 ? (
          <>
            <PageButton
              label={<GrFormPrevious />}
              disabled={currentPage === 1}
              onClick={() => selectPage(currentPage - 1)}
            />
            <PageButton
              label="1"
              onClick={() => selectPage(1)}
              selected={currentPage === 1}
            />
            <div className="flex flex-row mx-3">
              {middleButtons.map((index) => (
                <>
                  <PageButton
                    label={index}
                    onClick={() => selectPage(index)}
                    selected={index === currentPage}
                  />
                </>
              ))}
            </div>

            <PageButton
              label={numPages}
              selected={currentPage === numPages}
              onClick={() => selectPage(numPages)}
            />
            <PageButton
              label={<GrFormNext />}
              disabled={currentPage === numPages}
              onClick={() => selectPage(currentPage + 1)}
            />
          </>
        ) : null}

        {/*TODO: make this three buttons adapt to last page*/}
      </div>
    </>
  );
};

export default PageSelector;
