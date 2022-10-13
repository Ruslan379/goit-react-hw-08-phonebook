import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList } from 'components/TaskList/TaskList';
import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchTasks } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';

export default function Tasks() {
    const dispatch = useDispatch();
    console.log("Tasks==>selectLoading", selectLoading);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    console.log("Tasks==>isLoading", isLoading); //!

    return (
        <>
            <TaskEditor />
            <div>{isLoading && 'Request in progress...'}</div>
            {!isLoading && <TaskList />}
            {/* <TaskList /> */}
        </>
    );
}
