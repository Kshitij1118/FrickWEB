class ThreadEx extends Thread{
	@Override
	public void run(){
		for(int i=0; i<10; i++) {
			System.out.println(i);
		}
	}
	
}
public class MultiThreadingExample {
public static void main(String[] args){
	
	ThreadEx t=new ThreadEx();
	ThreadEx t1=new ThreadEx();
	
	t1.setDaemon(true);
	t.start();
	t1.start();
	
		for(int i=0; i<10; i++) {
			System.out.println(i);
		}
		
System.out.println(t1.isDaemon());
System.out.println(t.isDaemon());
	
	
}
}