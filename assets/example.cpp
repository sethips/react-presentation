//main.cpp File
#include <QtGui>
#include "myComboBox.h"
int main(int argc, char **argv)
{
	QApplication app(argc, argv);
	QMainWindow *window = new QMainWindow();    
    
        window->setWindowTitle(QString::fromUtf8("QComboBox currentIndexChanged"));
        window->resize(330, 220);
	
        QWidget *centralWidget = new QWidget(window);
	QHBoxLayout *layout = new QHBoxLayout();	
	centralWidget->setLayout(layout);

	
	MyComboBox* comboBox = new MyComboBox(centralWidget);
	comboBox->addItem("Item 1");
	comboBox->addItem("Item 2");
	comboBox->addItem("Item 3");
	comboBox->addItem("Item 4");
	
	
	layout->addWidget(comboBox);
	
	window->setCentralWidget(centralWidget);
	window->show();
	return app.exec();
}
//myComboBox.h File

#ifndef MYCOMBOBOX_H
#define MYCOMBOBOX_H
 
#include <QtGui>

//Derived Class from QComboBox
class MyComboBox: public QComboBox
{
  Q_OBJECT
  public:    
	MyComboBox(QWidget* parent):QComboBox(parent)
	{
	  this->setParent(parent);
	  connect(this , SIGNAL(currentIndexChanged(int)),this,SLOT(handleSelectionChanged(int)));
	};
	~ MyComboBox(){};	
	
  public slots:
	//Slot that is called when QComboBox selection is changed
	void handleSelectionChanged(int index)
	{
	    QMessageBox* msg = new QMessageBox();
	    msg->setWindowTitle("Hello !");	    
	    msg->setText("Selected Index is :"+QString::number(index));	     
	    msg->show();	  
	};
  
};
#endif