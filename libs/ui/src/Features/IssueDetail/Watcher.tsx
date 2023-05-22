import { useEffect } from 'react';

const transformToSubmitValues = (data: any) => {
  return {
    ...data,
    status: data.status.value,
    assignee: data.assignee.map((x: any) => x.value) ?? [],
    reporter: data.reporter.value,
    priority: data.priority.value,
  };
};

const Watcher = (props: any) => {
  const { watch } = props;

  useEffect(() => {
    const subscription =
      watch &&
      watch((value: any, { name }: any) => {
        const mapped = transformToSubmitValues(value);
        console.log(JSON.stringify(mapped, null, 2));
      });

    return () => subscription.unsubscribe();
  }, [watch]);
  return <></>;
};
export default Watcher;
