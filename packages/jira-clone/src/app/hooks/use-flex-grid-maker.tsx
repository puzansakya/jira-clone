export const useFlexGridMaker = () => {
    const DND_KEY = "id"

    /**
     * 1 = 4px
     */
    const GUTTER_WIDTH = 2;
    const NO_OF_COLUMNS = 4;
    const ROW_NEGATIVE_MARGIN = Math.abs(GUTTER_WIDTH) * -1 || -4;
    const EACH_COL_WIDTH = `${100 / NO_OF_COLUMNS}%`;

    return {
        ROW_NEGATIVE_MARGIN,
        EACH_COL_WIDTH,
        GUTTER_WIDTH,
        DND_KEY
    }
}

export default useFlexGridMaker;