import { useForm } from "react-hook-form"

export const AddToDo = ({ addToDo }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const save = (data) => {
        addToDo({ ...data })
        reset()
    }

    return <div>
        <h3>AddToDo</h3>
        <form className="form_todo" onSubmit={handleSubmit(save)}>
            <input type="text"
                placeholder="Enter your task name"
                {...register("name", {
                    required: "Enter your task name"
                })} />
            {errors.name && <p>{errors.name.message}</p>}

            <input type="text"
                placeholder="Enter your task description"
                {...register("description", {
                    required: "Enter your task description"
                })} />
            {errors.description && <p>{errors.description.message}</p>}

            <button className="btn btn-warning">save</button>
        </form>
    </div>
}