import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form'
import conf from '../conf/conf.js'

export default function RTE({name, control, label, defaultValue = ''}) {
  return (
    <div className='w-full'>
    {label && <label className='inline-block mb-1 pl-1'>
    {label}</label>}

    <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({field: {onChange}}) => (
      <Editor
        apiKey={conf.tinyMCEApiKey}
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                'image',
                'link',
                'advlist',
                'autolink',
                'lists',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount'
            ],
            toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft alingcenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help",
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={onChange}
        />
    )}
    />
    </div>
  )
}
