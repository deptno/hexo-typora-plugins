export const removeImageDirFromContent = data => {
  if (data['typora-copy-images-to']) {
    data.content = data.content.replace(/^!\[.*\]\((.+\/)(.+)\)/gm, (str, dir) => str.replace(dir, ''))
  }
  return data
}
