import React, { useState } from 'react';
import { View } from 'react-native';
import { Header, Text, Image, Button, Input } from 'react-native-elements';
import { useForm, Controller } from "react-hook-form";

const Contact = () => {

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        var base_url = "https://script.google.com/macros/s/{deploy_id}/exec";
        // var base_url = API_URL;

        setLoading(true);

        fetch(base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encodeURI(`email=${data.email}&body=${data.body}`)
        })
            .then(function (response) {
                //リダイレクト先のテキストが戻るのを待つ
                response.text()
                    .then((text) => {
                        setLoading(false);
                        alert(text);
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log(error);
                    })
            })
            .catch(function (error) {
                setLoading(false);
                alert("エラーが発生しました。");
            })
    }

    return (
        <View style={{ flex: 1 }}>
            {/* <Header
                centerComponent={{ text: "Contact", style: { color: "#fff", fontWeight: "bold" } }}
                containerStyle={{ backgroundColor: "#999" }}
            /> */}
            <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
                <Text h3 style={{ marginVertical: 30 }}>お問合せ</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Email"
                            style={{ backgroundColor: "#ddd", padding: 10 }}
                            labelStyle={{ marginVertical: 10 }}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            errorMessage={errors.email && errors.email.message}
                            autoCapitalize="none"
                        />
                    )}
                    name="email"
                    rules={{
                        required: "Emailは必須です。",
                        pattern: {
                            value: /^[a-z]+@[a-z]+\.[a-z]+$/,
                            message: "EmailはEmailの形式で入力してください。",
                        }
                    }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="お問合せ内容"
                            multiline={true}
                            numberOfLines={4}
                            maxLength={100}
                            style={{ height: 100, backgroundColor: "#ddd", padding: 10 }}
                            labelStyle={{ marginVertical: 10 }}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            errorMessage={errors.body && errors.body.message}
                            autoCapitalize="none"
                        />
                    )}
                    name="body"
                    rules={{
                        required: "お問合せ内容は必須です。",
                        maxLength: {
                            value: 10,
                            message: "入力は10文字以下でお願いします。"
                        }
                    }}
                    defaultValue=""
                />
                <Button
                    title="送信"
                    buttonStyle={{ width: 200, height: 50 }}
                    style={{ marginTop: 20 }}
                    onPress={handleSubmit(onSubmit)}
                    loading={loading}
                />
            </View>
        </View >
    );
}

export default Contact;