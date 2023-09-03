import { useEffect } from 'react';

const transformToSubmitValues = (data: any) => {
  return {
    ...data,
    statusId: data.status.value,
    assignees: data.assignees.map((x: any) => x.value) ?? [],
    reporterId: data.reporter.value,
    priorityId: data.priority.value,
    typeId: data.type.value,
  };
};

const Watcher = (props: any) => {
  const { watch, onSubmit } = props;

  useEffect(() => {
    const subscription =
      watch &&
      watch((value: any, { name }: any) => {
        const mapped = transformToSubmitValues(value);
        onSubmit(mapped)

      });

    return () => subscription.unsubscribe();
  }, [watch]);
  return <></>;
};
export default Watcher;
