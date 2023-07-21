/*
 * @Descripttion: 
 * @Author: chansinging
 * @version: 
 * @Date: 2023-07-20 15:38:59
 * @LastEditors: chansinging
 * @LastEditTime: 2023-07-20 16:07:47
 */
import * as vscode from 'vscode';
import * as fs from 'fs';

function getFileInfoState(uri: any) {
	const filePath = uri.path.substring(1);
	fs.stat(filePath, (err, stats) => {
		if (err) {
			vscode.window.showErrorMessage(`获取文件时遇到了错误${err}`);
		}
		if (stats.isDirectory()) {
			vscode.window.showErrorMessage(`检查是文件夹，不是文件`)
		}
		if (stats.isFile()) {
			const size = stats.size;
			const createTime = stats.birthtime.toLocaleDateString();
			const modifyTime = stats.mtime.toLocaleTimeString();
			vscode.window.showInformationMessage(`文件大小为${size}字节；文件创建时间为${createTime}；文件修改时间为${modifyTime}`, { modal: true });
		}
	});
	const stats = fs.statSync(filePath);
	console.log('stats', stats);
	console.log('isFile', stats.isFile());
}
export default getFileInfoState;