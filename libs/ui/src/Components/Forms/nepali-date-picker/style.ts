export const primary = "#2096f5";
export const secondary = "#fff";
export const textColor = "#8c8c8c";
export const text_disabled = "#d8d8d8";
export const get_styles = (is_dark: boolean) => {
    if (is_dark) {
        return ({
            month_year_panel: {
                p: 3,
                bg: "black",
                color:"gray.100",
                borderRadius: '5px',
                textAlign: 'center',
                // my: '5px'
            },
            calendar: {
                bg: "black",
                borderRadius:"md",
                boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
                boxSizing: "border-box",
                color: textColor,
                display: "block",
                fontFamily: "NotoSans, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                height: "auto",
                letterSpacing: "0.2px",
                lineHeight: "1.25em",
                // padding: "15px",
                position: "absolute",
                textAlign: "right",
                userSelect: "none",
                left: "0",
                zIndex: "9999",
            },
            selected: {
                color: secondary,
                position: "relative",
                _after: {
                    bg: primary,
                    borderRadius: "50%",
                    content: '""',
                    height: "35px",
                    left: "50%",
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "35px",
                    zIndex: "-1",
                }
            },
            current: {
                opacity: 1,
                color:"gray.100"
            },
            disabled: {
                color: "gray.500"
            },
            today: {
                color: secondary,
                position: "relative",
                _before: {
                    bg: primary,
                    borderRadius: "50%",
                    bottom: "6px",
                    content: '""',
                    height: "4px",
                    left: "50%",
                    margin: "auto",
                    position: "absolute",
                    transform: "translateX(-50%)",
                    width: "4px",
                }
            }
        });
    }

    return ({
        month_year_panel: {
            p: 3,
            bg: "#f2f3f5",
            borderRadius: '5px',
            textAlign: 'center',
            my: '5px'
        },
        calendar: {
            bg: secondary,
            borderRadius: "6px",
            boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            color: textColor,
            display: "block",
            fontFamily: "NotoSans, sans-serif",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "normal",
            height: "auto",
            letterSpacing: "0.2px",
            lineHeight: "1.25em",
            padding: "15px",
            position: "absolute",
            textAlign: "right",
            userSelect: "none",
            left: "0",
            zIndex: "9999",
        },
        selected: {
            color: secondary,
            position: "relative",
            _after: {
                bg: primary,
                borderRadius: "50%",
                content: '""',
                height: "35px",
                left: "50%",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "35px",
                zIndex: "-1",
            }
        },
        current: {
            opacity: 1
        },
        disabled: {
            color: text_disabled
        },
        today: {
            color: secondary,
            position: "relative",
            _before: {
                bg: primary,
                borderRadius: "50%",
                bottom: "6px",
                content: '""',
                height: "4px",
                left: "50%",
                margin: "auto",
                position: "absolute",
                transform: "translateX(-50%)",
                width: "4px",
            }
        }
    });
}