import {ref} from "vue";

export const user = ref<User>({
    name: "Test user",
    email: "test@test.com",
    password: "test",
    tasks: [],
});
