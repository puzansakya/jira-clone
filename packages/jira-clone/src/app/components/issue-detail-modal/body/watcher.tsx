import { useEffect } from 'react';

const Watcher = (props: any) => {
  const { watch, reset, setError, setValue } = props;

  useEffect(() => {
    const subscription =
      watch &&
      watch((value: any, { name, type }: any) => {
        console.log({
          name,
          value,
        });
        // if (name === 'EmployeeId') {
        // }
      });

    return () => subscription.unsubscribe();
  }, [watch]);
  return <></>;
};
export default Watcher;
