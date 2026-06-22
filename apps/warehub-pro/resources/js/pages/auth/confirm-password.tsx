import { Form, Head } from '@inertiajs/react';
import { InputError } from '@warehub/ui';
import { PasswordInput } from '@warehub/ui';
import { Button } from '@warehub/ui';
import { Label } from '@warehub/ui';
import { Spinner } from '@warehub/ui';
import { store } from '@/routes/password/confirm';

export default function ConfirmPassword() {
    return (
        <>
            <Head title="Подтверждение пароля" />

            <Form {...store.form()} resetOnSuccess={['password']}>
                {({ processing, errors }) => (
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="password">Пароль</Label>
                            <PasswordInput
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                autoComplete="current-password"
                                autoFocus
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="flex items-center">
                            <Button
                                className="w-full"
                                disabled={processing}
                                data-test="confirm-password-button"
                            >
                                {processing && <Spinner />}
                                Подтвердить пароль
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </>
    );
}

ConfirmPassword.layout = {
    title: 'Подтверждение пароля',
    description: 'Это защищённая область. Введите пароль для продолжения.',
};
