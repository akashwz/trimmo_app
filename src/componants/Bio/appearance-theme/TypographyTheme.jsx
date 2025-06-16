import { fontOptions } from "@/utils/FontOptions";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const TypographyTheme = ({
  expandedThemeTypography,
  handleChangeThemeTypography,
  changeAppearanceData,
  handleChangeAppearance,
}) => {

  return (
    <div className="mt-5">
      <Accordion expanded={expandedThemeTypography} onChange={handleChangeThemeTypography}>
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
          <h3>Typography setting</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="my-4">
              <label
                htmlFor="profile_border_style"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Typography Font
              </label>
              <div className="relative">
                <select
                  id="profile_border_style"
                  name="profile_border_style"
                  value={changeAppearanceData?.typography_font}
                  onChange={(e) => handleChangeAppearance(e.target.value, "typography_font")}
                  className="w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-700 text-sm py-2.5 px-4 appearance-none"
                >
                  {fontOptions?.map((group) => (
                    <optgroup key={group?.label} label={group?.label}>
                      {group?.options?.map((font) => (
                        <option
                          key={font?.value}
                          value={font?.value}
                          style={{ fontFamily: font?.style, fontSize: "18px" }}
                        >
                          {font?.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TypographyTheme;
