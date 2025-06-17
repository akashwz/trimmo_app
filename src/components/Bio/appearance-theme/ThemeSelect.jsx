import { getTheme } from "@/redux/Action/appearance.action";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeSelect = ({
  expandedSelectTheme,
  handleChangeSelectTheme,
  selectedImage,
  handleThemeSelect,
}) => {
  const { appreanceTheme } = useSelector((state) => state?.appreanceReducer);
  const { getThemeData } = useSelector((state) => state?.appreanceReducer);
  const [theme, setTheme] = useState(appreanceTheme || "bold");
  const dispatch = useDispatch();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  const fetchTheme = async () => {
    try {
      const data = await dispatch(getTheme());
    } catch (error) {
      console.error("Error fetching theme:", error);
    }
  };

  return (
    <div className="mt-5">
      <Accordion expanded={expandedSelectTheme} onChange={handleChangeSelectTheme}>
        <AccordionSummary
          expandIcon={
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Select Theme</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {getThemeData
              ?.filter((item) => item.status)
              .map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={`Phone ${index + 1}`}
                    className={`cursor-pointer p-2 ${
                      selectedImage === item?._id
                        ? "border-2 border-black"
                        : "border-2 border-transparent"
                    } rounded-lg`}
                    onClick={() => {
                      handleThemeSelect(index, item?._id);
                      handleThemeChange(item.themeType);
                    }}
                  />
                  <Typography variant="caption" className="mt-2">
                    {item.name}
                  </Typography>
                </div>
              ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ThemeSelect;
