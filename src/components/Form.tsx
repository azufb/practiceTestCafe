import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string,
    age: number,
    dummy1: string,
    dummy2: string,
    dummy3: string
};

export const Form = () => {
    const { register, handleSubmit } = useForm<Inputs>({
        defaultValues: {
            name: '山田花子',
            age: 18,
            dummy1: 'ダミーテキスト1',
            dummy2: 'ダミーテキスト2',
            dummy3: 'ダミーテキスト3'
        }
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1>This is Form!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>名前:</label>
                <input {...register('name')} />
                <label>年齢:</label>
                <input  {...register('age')} />
                <label>ダミー1:</label>
                <input  {...register('dummy1')} />
                <label>ダミー2:</label>
                <input  {...register('dummy2')} />
                <label>ダミー3:</label>
                <input  {...register('dummy3')} />

                <input type='submit' />
            </form>
        </div>
    )
}