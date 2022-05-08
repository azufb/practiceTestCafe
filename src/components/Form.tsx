import { SubmitHandler, useForm } from 'react-hook-form';
import { formArea, formLabel, formInput, submitBtn } from '../styles/form.css';
import { contents } from '../styles/common.css';

type Inputs = {
    name: string,
    age: number,
    dummy1: string,
    dummy2: string,
    dummy3: string
};

export const Form = () => {
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            name: '',
            age: 0,
            dummy1: 'ダミーテキスト1',
            dummy2: 'ダミーテキスト2',
            dummy3: 'ダミーテキスト3'
        }
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    const watchNullFields = watch(['name', 'age', 'dummy1', 'dummy2', 'dummy3']).some(value => value === '' || value === null);

    const disabledControllFunc = () => {
        if (watchNullFields || getValues('age') === 0) {
            return true;
        } else {
            return false;
        }
    }

    console.log(getValues(['name', 'age', 'dummy1', 'dummy2', 'dummy3']));

    return (
        <div>
            <div className={contents}>
                <h1>This is Form!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={formArea}>
                    <label className={formLabel}>名前:</label>
                    <input {...register('name', {required: true})} className={formInput} />
                    <label className={formLabel}>年齢:</label>
                    <input {...register('age', {required: true})} className={formInput} />
                    <label className={formLabel}>ダミー1:</label>
                    <input {...register('dummy1', {required: true})} className={formInput} />
                    <label className={formLabel}>ダミー2:</label>
                    <input {...register('dummy2', {required: true})} className={formInput} />
                    <label className={formLabel}>ダミー3:</label>
                    <input {...register('dummy3', {required: true})} className={formInput} />

                    <input type='submit' disabled={disabledControllFunc()} className={submitBtn} />
                </form>
            </div>
        </div>
    )
}